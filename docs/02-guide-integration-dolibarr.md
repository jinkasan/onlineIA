# Guide d’intégration Dolibarr

## Rôle de Dolibarr dans l’architecture Jinkasan

Dans ce projet, **Dolibarr** est utilisé comme le **système CRM/ERP central** pour gérer les données métier de Jinkasan. Dolibarr est une solution open-source bien établie, offrant des modules de gestion de contacts, tiers, produits, commandes, PDF, etc. L’idée est de profiter de ces fonctionnalités existantes pour éviter de “réinventer la roue” sur certaines parties back-office (gestion des utilisateurs, suivi des inscriptions, génération de documents).

**Pourquoi Dolibarr ?** Son utilisation permet de structurer l’information (fiches tiers, catalogues, commandes, etc.) dans un cadre standard et de bénéficier de modules tels que la génération de PDF (bons de commande, factures) et le stockage de documents (pièces jointes aux fiches). Pour Jinkasan MVP, Dolibarr est essentiellement utilisé en **backend**, via un microservice dédié (*ms-dolibarr-bridge*) qui communique avec l’API REST de Dolibarr. Les utilisateurs finaux de Jinkasan n’interagissent pas directement avec Dolibarr ; seuls les administrateurs internes peuvent s’y connecter si nécessaire pour consulter ou extraire des données.

**Important :** Aucune personnalisation lourde du code Dolibarr n’est réalisée dans le MVP. On exploite **les entités standard** (Tiers, Commandes, etc.) de Dolibarr pour y stocker nos données, de sorte que l’ERP reste **standard** et facilement maintenable (mises à jour possibles sans conflit). Toute logique spécifique à Jinkasan est implémentée dans nos microservices Spring Boot, Dolibarr ne fait qu’héberger et structurer certaines données.

**Résumé d’utilisation** : Dolibarr servira principalement à :
- Stocker les informations des **utilisateurs/testeurs** (en tant que contacts ou tiers dans le CRM).
- Stocker et gérer les informations liées aux **offres d’achat groupé** (produits/services proposés, éventuellement comme objets “Produits” ou “Propositions commerciales”).
- Enregistrer les **inscriptions aux groupes d’achat** (via un schéma à définir – ex: chaque groupement peut correspondre à un “projet” ou une “affaire commerciale”, les participants figureraient dans des listes associées).
- Gérer les **fournisseurs partenaires** et éventuellement les commandes globales passées auprès d’eux une fois un groupe validé.
- Générer certains **documents PDF** (bons d’achat pour les clients, contrats pour les partenaires, reçus de paiement, etc.) grâce aux modules documentaires intégrés.
- Servir de base pour la **gestion interne** par l’équipe (plutôt que de développer un back-office web from scratch, l’équipe Jinkasan pourra utiliser l’interface Dolibarr pour de nombreuses opérations d’administration des données).

Dolibarr n’interviendra pas directement côté utilisateur final (les utilisateurs n’accèderont pas à Dolibarr), mais via une **intégration applicative** avec notre front-end. Cette intégration est réalisée par un microservice dédié.

## Microservice **ms-dolibarr-bridge** : Architecture et communication

Pour faire communiquer la plateforme front-end (en React) avec Dolibarr, un composant intermédiaire a été conçu : le **microservice “ms-dolibarr-bridge”**. Il s’agit d’une application Spring Boot (Java) qui sert de **bridge** entre Dolibarr et le reste de l’écosystème.

**Rôles et responsabilités du microservice** :
- **Exposer des API REST** simples et sécurisées aux composants front (landing page et application web) pour les opérations courantes (inscription d’un testeur, authentification d’un utilisateur, récupération de la liste des offres, etc.).
- **Convertir/adapter les données** entre le format utilisé par le front et celui attendu par l’API Dolibarr. Par exemple, lorsqu’un nouvel inscrit est envoyé par le front (JSON avec nom/téléphone/email), le microservice va créer un “tiers” ou “contact” Dolibarr via les endpoints adéquats en utilisant l’API REST Dolibarr, puis renvoyer une réponse appropriée.
- **Centraliser la logique de sécurité** vis-à-vis de Dolibarr. Le microservice détient les **identifiants d’accès API** de Dolibarr et s’assure que seules les opérations autorisées sont effectuées. Le front n’a **pas connaissance** des détails Dolibarr (URL, tokens, etc.), il ne voit qu’une API Jinkasan unifiée.
- **Orchestrer des transactions multi-étapes** si besoin. Par exemple, pour l’inscription à un groupe d’achat : il faudra à la fois créer un enregistrement de participation et éventuellement déclencher la génération d’un document. Le microservice peut gérer ces enchaînements en appelant plusieurs endpoints Dolibarr de façon contrôlée.
- **Maintenir une couche d’abstraction** : cela permet d’éventuellement changer l’outil CRM plus tard ou de modifier la structure en Dolibarr sans impacter le front, en n’ajustant que le bridge.

**Communication technique** :
- Dolibarr offre une API REST standard (activer le module API Rest, avec un jeton d’API ou un authentification par clé API). Le microservice utilise cette API pour toutes les opérations CRUD nécessaires. Les échanges se font en JSON.
- Exemple de flux : 
  - *Inscription testeur* : le front envoie `POST /api/testers` au microservice avec les infos. Le microservice appelle l’API Dolibarr `POST /api/index.php/contact` (ou `/thirdparties` selon la structure choisie) avec les données correspondantes. Dolibarr crée l’entrée et renvoie un ID. Le microservice peut ensuite stocker cet ID et renvoie au front une confirmation.
  - *Récupérer les offres* : le front fait `GET /api/group-offers`. Le microservice interroge soit Dolibarr (par ex, liste de produits marqués “achat groupé”), soit sa propre base cache, puis renvoie la liste formatée.
- Le microservice et Dolibarr seront déployés sur le même réseau sécurisé (par ex., le Dolibarr étant sur le VPS, l’appli Spring Boot également, elles communiquent en local). L’API Dolibarr n’est **pas exposée directement sur Internet**, seul le microservice l’appelle, pour éviter tout appel non contrôlé.

## Gestion des utilisateurs et contacts dans Dolibarr

**Enregistrement des testeurs/utilisateurs** :  
Dolibarr permet de gérer des **tiers** (qui peuvent être des clients, prospects, fournisseurs) et des **contacts/adhérents**. Dans notre cas, les 500 testeurs initialement peuvent être enregistrés soit comme:
- des **tiers de type Prospect** (Dolibarr distingue Prospect vs Client), 
- ou comme des **tiers Client** directement (puisque ce sont des clients potentiels),
- ou utiliser le module **Membres/Adhérents** (s’ils sont considérés comme une communauté de beta-testeurs).

Une option simple est de créer chaque testeur en tant que **Tiers** (Thirdparty) avec un tag “Bêta-testeur”. On stocke leur nom, téléphone (champ phone), email, etc. Dolibarr permet de personnaliser des champs si besoin (on pourrait ajouter un champ “RangInscription” pour stocker s’il fait partie des 100 premiers, etc., mais ce n’est pas obligatoire car on peut calculer ce rang hors CRM).

Lors du passage en phase 2, ces tiers seront convertis en clients effectifs. De nouveaux inscrits (qui n’étaient pas testeurs) seront aussi ajoutés comme tiers clients. Ainsi, la base Dolibarr des tiers représente la **base client** de Jinkasan.

**Gestion des comptes de connexion** : Important à noter, les utilisateurs finaux n’auront **pas de compte Dolibarr**. Dolibarr gère ses propres utilisateurs (pour accès à son back-office) mais on ne va pas créer 500 comptes Dolibarr pour les clients. Le front-end aura son propre mécanisme d’authentification (via le microservice) et les clients n’auront pas conscience de Dolibarr. Donc, dans Dolibarr, les testeurs/clients seront uniquement des entrées CRM sans login. Les seuls comptes utilisateurs Dolibarr seront pour l’équipe Jinkasan (admins, commerciaux, etc.).

**Informations stockées** :
- Nom, Prénom du client (tier or contact).
- Téléphone (il y a un champ Tel dans tiers).
- Email.
- Adresse éventuellement (si on la demande plus tard, on pourra compléter).
- Statut (Prospect/Client).
- Références croisées : on peut utiliser le champ “Thirdparty code” ou “Ref” pour stocker un identifiant du front, ou utiliser l’ID Dolibarr comme référence côté front pour lier les données.
- Potentiellement, réponses au mini-sondage (soit on ne stocke pas, soit on stocke en **note** du tiers, ou on crée des tags multicatégories du style “Intéressé: Motos” etc.).

**Segmentation et utilisation CRM** :
L’équipe marketing pourra filtrer dans Dolibarr par ces tags ou statuts pour par exemple extraire la liste des testeurs intéressés par tel type de produit et leur envoyer un email ciblé (Dolibarr a des fonctions d’emailing, bien que basiques). Ceci montre l’intérêt d’enregistrer un maximum d’info exploitable dans le CRM.

## Gestion des groupes d’achat et inscriptions via Dolibarr

Dolibarr n’a pas une notion native de “groupe d’achat” mais on peut détourner certains modules pour représenter nos offres groupées :
- Une possibilité est d’utiliser le module **Projet** : Créer un “Projet” Dolibarr par offre d’achat groupé. Le projet peut avoir un nom (ex: “Achat groupé – Téléviseur 42 Samsung”) et on peut lier des tiers au projet.
- Ou utiliser le module **Proposition commerciale** : créer une propale par offre, avec des lignes de produits et un nombre de lots, etc. Cependant le côté multi-client n’est pas naturel dans une propale.
- Ou simplement gérer hors module Dolibarr structuré en utilisant un objet custom ou les catégories.

Une solution mixte : 
  - Créer chaque offre comme un **Produit/Service** dans Dolibarr (afin d’avoir son prix, description, etc.).
  - Puis, pour suivre un groupe en particulier, on peut créer un **Projet** qui référence ce produit et associer les clients participants à ce projet.
  - Les participants pourraient être ajoutés en tant que “contacts liés” au projet (Dolibarr permet d’attacher des contacts à un projet).
  - Le statut du projet (en cours, terminé) reflète l’état du groupe.

Le microservice se chargera donc, à l’ouverture d’une nouvelle offre sur la plateforme, de créer les entrées appropriées :
- Créer le Produit (ou vérifier s’il existe déjà).
- Créer le Projet correspondant.
- Marquer ce Projet d’un code ou tag pour l’identifier comme un achat groupé ouvert.

Lorsque un utilisateur rejoint un groupe :
- Le microservice crée une entrée reliant le client au projet dans Dolibarr. S’il n’y a pas de méthode directe via API, on peut dans Dolibarr créer une tâche ou un contact pour chaque participation. Alternativement, enregistrer la participation dans une base interne du microservice, et ne mettre à jour Dolibarr qu’à la fin (par ex. créer une commande groupée finale).
- Une autre approche est de ne pas tout enregistrer immédiatement dans Dolibarr pour les participations, mais plutôt d’attendre la finalisation du groupe. Par exemple, tant que le groupe n’est pas validé, on garde les participants en base du microservice. Une fois validé, le microservice pourrait créer **une Commande client globale** dans Dolibarr au nom de Jinkasan avec X quantités du produit pour le fournisseur, et **des Factures pro-forma** ou **bons de livraison** pour chaque client. Cependant, ceci devient assez complexe. 
- Simplicité MVP : enregistrer chaque participant tout de suite comme un **tiers** et peut-être créer une **facture brouillon** ou une **commande** associée au projet. Par exemple, quand 10 personnes rejoignent, on a 10 commandes en attente. Quand groupe validé, on confirme ces commandes.

**Choix retenu pour MVP** : 
On privilégie la **traçabilité dans Dolibarr sans surcharger**. On peut opter pour :
  - *Au moment du prépaiement* : créer dans Dolibarr une **facture d’acompte** ou au moins un **élément de tiers** notant qu’il a payé X FCFA. Dolibarr gère les factures d’acomptes partiels, mais c’est peut-être surdimensionné pour MVP. 
  - On peut plus simplement enregistrer le paiement comme une **transaction** dans un module banque/caisse de Dolibarr (par ex, créer une entrée “Acompte reçu de M. X pour projet Y”). Ceci donne une trace financière.
  - *A validation du groupe* : créer une **facture** finale ou commande pour chaque participant du montant total, en imputant l’acompte déjà payé (Dolibarr peut gérer un avoir ou paiement déjà versé).
  - Générer les **bons d’achat** : possiblement via le module “Expédition” ou “Bon de livraison” de Dolibarr, en adaptant le modèle PDF. Une expédition par client, liée à une commande, pourrait servir de bon de retrait.
  
Vu le délai et la complexité, pour MVP on pourrait éviter de trop complexifier les objets Dolibarr créés en amont, et plutôt :
- A la fin, **importer** les résultats dans Dolibarr : par exemple, une fois le groupe fini, créer une commande fournisseur (de Jinkasan vers le fournisseur) pour le total, et créer X factures clients (ou notes) pour chaque participant pour archive, puis les régler.
- Cependant, cela demande du travail manuel. 

**Conclusion utilisation** : Ce guide d’intégration se concentre sur *comment Dolibarr interagit*, mais la conception finale pourra adapter le degré d’enregistrement dans Dolibarr. L’important est de **ne rien perdre** : que chaque paiement et chaque engagement client soit bien noté quelque part (Dolibarr ou logs).

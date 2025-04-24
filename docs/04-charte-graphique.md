### Charte graphique — Version “Logo 2025”

> **Référence Logo**  
> ![logo](sandbox:/mnt/data/Jinkasan Big FT.png)

---

## 1. Palette officielle

| Rôle | HEX | Usage principal | Ratio WCAG sur #FFFFFF |
|------|-----|-----------------|------------------------|
| **Rouge Jinkasan** | **#DD442E** | Couleur maîtresse : CTA primaires, titres, badges d’urgence | 4.9 : 1 ✔︎ |
| **Vert Soutenu** | **#4B9C5B** | Accent “succès / progression”, pictogrammes, barres complétude | 4.6 : 1 ✔︎ |
| **Jaune Vif** | **#FACE31** | Accent “alerte douce / information”, rubans “Restant”, surlignage | 1.3 : 1 (→ Utiliser sur fonds foncés) |
| **Noir Profond** | #1A1A1A | Texte principal sur fond clair | – |
| **Gris Clair** | #F5F5F5 | Fonds neutres, séparateurs | – |
| **Blanc** | #FFFFFF | Fonds majoritaires | – |

> 🛈 **Violet #512373** devient _secondaire_ : utilisez‑le uniquement pour de grands aplats décoratifs (illustrations, bandeaux internes) ou lorsqu’un contraste supplémentaire est requis.

---

## 2. Principes de combinaison

- **CTA primaires** : fond Rouge #DD442E, texte Blanc, Hover #C73C29 (‑10 % luminosité).  
- **CTA secondaires** : fond transparent, bordure Rouge 2 px, texte Rouge; Hover → fond Rouge 10 % opacité.  
- **États système** :  
  - Succès ✔︎ → Vert,  
  - Warning ⚠ → Jaune (placer sur fond sombre ou entourer d’un fin tracé Noir 20 % opacité),  
  - Erreur ✖︎ → Rouge plus sombre #C73C29.

---

## 3. Typographie

| Élément | Police / graisse | Couleur par défaut |
|---------|-----------------|--------------------|
| H1 / H2 | Verdana Bold | Rouge (#DD442E) ou Blanc sur fond sombre |
| H3 / H4 | Verdana Semi‑Bold | Noir #1A1A1A |
| Texte courant | Verdana Regular 16 px | Noir #1A1A1A |
| Légendes / labels | Verdana Regular 14 px | Vert (#4B9C5B) pour “succès”, Gris #555 pour notes |

---

## 4. Composants UI

### Boutons

```css
.btn-primary{
  background:#DD442E; color:#FFF;
  border-radius:6px; padding:12px 28px;
  transition:.15s transform, .15s background;
}
.btn-primary:hover{ background:#C73C29; transform:scale(1.03); }
.btn-secondary{ border:2px solid #DD442E; color:#DD442E; background:transparent; }
.btn-secondary:hover{ background:rgba(221,68,46,.1); }
```

### Badges & Rubans

| Type | Fond | Texte |
|------|------|-------|
| “COMPLET” | Vert #4B9C5B | Blanc |
| “XX restants” | Jaune #FACE31 | Noir #1A1A1A |
| “PHASE BÊTA” | Rouge #DD442E | Blanc |

### Barre de progression

- Fond Gris #E5E5E5, partie remplie : dégradé **Vert → Rouge** (90°) pour symboliser la montée en puissance jusqu’à “complete”.

### Illustrations / icônes

- Style flat ; tracés 2 px.  
- Couleurs : Rouge (principale), Vert (succès), Jaune (information).  
- Éviter l’orange ou le violet pour les icônes afin de garder la cohérence tri‑couleurs du logo.

---

## 5. Mise en page & arrière‑plans

| Zone | Fond | Exemple |
|------|------|---------|
| Header sticky | Blanc ou Violet #512373 (logo en négatif blanc) |
| Sections alternées | Blanc puis Gris #F5F5F5 pour aérer |
| Hero | Photo + voile dégradé **Noir 50 % → transparent** pour assurer un contraste ≥ 4.5 avec texte Blanc |
| Footer | Noir #1A1A1A, texte Blanc, liens Rouge (hover Jaune) |

---

## 6. Accessibilité

- Vérifier tous les contrastes via **WebAIM Contrast Checker**.  
- Jaune (#FACE31) sur Blanc interdit ; placez‑le toujours sur fond sombre ou dans un badge à bordure sombre.  
- Ajout d’un **focus outline** 2 px Jaune sur les CTA pour la navigation clavier.

---

## 7. Exemples d’application

| Composant | Capture (schéma) | Notes |
|-----------|------------------|-------|
| Carte “Bon d’achat 3 000 FCFA” | fond Rouge, pictogramme cadeau Blanc, ruban “COMPLET” Vert | Utiliser radius 12 px + ombre douce rgba(0,0,0,.08) |
| Barre info haute | fond dégradé Violet→Rouge 10 % opacité, texte Blanc Verdana 14 px | Compteur “258 j” encadré d’un badge Jaune |
| Stepper (1/4) | cercles bord Rouge 2 px, step actif fond Rouge, texte Blanc | Lien “Retour” Gris #777 |

---

## 8. Kit Figma / variables

Créez trois **Color Styles** nommés :

1. `Brand/Primary #DD442E`  
2. `Brand/Success #4B9C5B`  
3. `Brand/Highlight #FACE31`

…et deux `Elevation` (shadow) variables :  
- `Elevation/Soft` 0 1 4 rgba(0,0,0,.1)  
- `Elevation/Hard` 0 2 8 rgba(0,0,0,.15)
<template>
  <div>
    <p class="text-sm grey--text text--darken-2 px-5 pt-6">DASHBOARD</p>
    <nuxt-link to="/orders/OrderList" class="dashboard-nav-link px-4">
      <div class="d-flex align-center">
        <img
          v-svg-inline
          class="icon mr-2"
          src="~/assets/images/icons/bag.svg"
          alt=""
        />
        <span>Orders</span>
      </div>
      <p class="mb-0">5</p>
    </nuxt-link>

    <nuxt-link to="/Wishlist" class="dashboard-nav-link px-4">
      <div class="d-flex align-center">
        <img
          v-svg-inline
          class="icon mr-2"
          src="@/assets/images/icons/heart.svg"
          alt=""
        />

        <span>Wishlist</span>
      </div>
      <p class="mb-0">19</p>
    </nuxt-link>
    <nuxt-link to="/supportTickets/AllTickets" class="dashboard-nav-link px-4">
      <div class="d-flex align-center">
        <img
          v-svg-inline
          class="icon mr-2"
          src="@/assets/images/icons/customer-service.svg"
          alt=""
        />
        <span>Support Tickets</span>
      </div>
      <p class="mb-0">1</p>
    </nuxt-link>
    <p class="text-sm grey--text text--darken-2 px-5 pt-6">ACCOUNT SETTINGS</p>
    <nuxt-link to="/profile/ViewProfile" class="dashboard-nav-link px-4">
      <div class="d-flex align-center">
        <img
          v-svg-inline
          class="icon mr-2"
          src="@/assets/images/icons/user.svg"
          alt=""
        />
        <span>Profile Info</span>
      </div>
      <p class="mb-0">3</p>
    </nuxt-link>
    <nuxt-link to="/address/ListAddress" class="dashboard-nav-link px-4">
      <div class="d-flex align-center">
        <img
          v-svg-inline
          class="icon mr-2"
          src="@/assets/images/icons/pin.svg"
          alt=""
        />
        <span>Addresses</span>
      </div>
      <p class="mb-0">16</p>
    </nuxt-link>
    <nuxt-link to="/shop/CheckoutAlternative" class="dashboard-nav-link px-4">
      <div class="d-flex align-center">
        <img
          v-svg-inline
          class="icon mr-2"
          src="@/assets/images/icons/credit-card-1.svg"
          alt=""
        />
        <span>Payment Methods</span>
      </div>
      <p class="mb-0">4</p>
    </nuxt-link>
  </div>
</template>

<script></script>

<style lang="scss">
.dashboard-nav-link {
  color: #2b3445 !important;
  text-decoration: none;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-left: 4px solid #fff;
  margin-bottom: 20px;
  svg {
    width: 20px;
  }
  &.router-link-exact-active {
    color: #d23f57 !important;
    border-left: 4px solid #d23f57;
  }
  
  &:hover {
    color: #d23f57 !important;
    border-left: 4px solid #d23f57;
  }
}
</style>

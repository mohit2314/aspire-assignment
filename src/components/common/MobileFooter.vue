<template>
  <q-footer bordered class="bg-white footer text-primary lt-md">
    <div v-for="item in navItemsList" :key="item" class="mobile__nav-item">
      <div class="icon">
        <img :src="getIconUrl(item.icon)" alt="" />
      </div>
      <div class="label">
        {{ item.label }}
      </div>
    </div>
  </q-footer>
</template>


<script setup lang='ts'>
import { useImage } from "../../composables/utils";

const { getIconUrl } = useImage();

const navItemsList = [
  {
    icon: "mobile_Logo.svg",
    label: "Home",
  },
  {
    icon: "pay.svg",
    label: "Cards",
  },
  {
    icon: "mobile_payments.svg",
    label: "Payments",
  },
  {
    icon: "mobile_credit.svg",
    label: "Credit",
  },
  {
    icon: "mobile_account.svg",
    label: "Profile",
  },
];
</script>

<style lang='scss'>
.footer {
  position: fixed;
  box-shadow: 0px -3px 6px #00000014;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px 0px;
}
.mobile__nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .label {
    font-size: 9px;
  }
  .--active {
    color: #01d167;
  }
}
</style>
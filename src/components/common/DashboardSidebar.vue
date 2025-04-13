<template>
     <div class="dashboard-sidebar-panel q-pa-xl gt-sm">
        <div class="dashboard-sidebar-panel__brand">
          <div class="dashboard-sidebar-panel__brand-logo">
            <img src="../../assets/Logo.svg" alt="aspire-logo" />
          </div>
          <div class="dashboard-sidebar-panel__brand-tagline">
            Trusted way of banking for 3,000+ SMEs and startups in Singapore
          </div>
        </div>

        <ul class="dashboard-sidebar-panel__nav-list q-mt-xl">
          <li
            v-for="item in navigationListItems"
            :key="item.itemLabel"
            :class="['dashboard-sidebar-panel__nav-list--item', {'active': activeTab === item.itemLabel}]"
          >
            <span>
              <img :src="getIcon(item.icon)" :alt="item.itemLabel" />
            </span>
            <span class="label">{{ item.itemLabel }}</span>
          </li>
        </ul>
      </div>
</template>

<script setup lang='ts'>
import { ref, computed } from "vue";

interface NavItem {
  icon: string;
  itemLabel: string;
}

const leftDrawerOpen = ref(false);
const activeTab= ref("Cards");

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const navigationListItems: NavItem[] = [
  { icon: "Home.svg", itemLabel: "Home" },
  { icon: "Card.svg", itemLabel: "Cards" },
  { icon: "Payments.svg", itemLabel: "Payments" },
  { icon: "Credit.svg", itemLabel: "Credit" },
  { icon: "Account.svg", itemLabel: "Settings" },
];


const getIcon = (iconName: string) => {
  return new URL(`../../assets/${iconName}`, import.meta.url).href;
};
</script>

<style lang='scss'>
.dashboard-sidebar-panel {
  background-color: $primary;
  height: 100vh;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: fixed;
  &__brand {
    margin-bottom: 32px;
    &-logo {
      margin-bottom: 19px;
    }
    &-tagline {
      color: #fff;
      opacity: 30%;
      font-size: 15px;
    }
  }
  &__nav-list {
    max-height: 500px;
    height: calc(45vh);
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    color: #fff;

    &--item {
      display: flex;
      cursor: pointer;

      .label {
        font-size: 16px;
        margin-left: 14px;
      }
    }
    .active{
      color: $secondary;
      font-weight: 600;
    }
  }
  @media (max-width: $breakpoint-md-min) {
    max-width: 300px;
  }
}
</style>
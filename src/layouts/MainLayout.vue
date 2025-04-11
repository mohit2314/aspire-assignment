<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Sidebar (Show above 900px)-->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :breakpoint="900">
      <div class="dashboard-sidebar-panel q-pa-xl">
        <div class="dashboard-sidebar-panel__brand">
          <div class="dashboard-sidebar-panel__brand-logo">
            <img src="../assets/Logo.svg" alt="aspire-logo" />
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
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
      <router-view class="main-section" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

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

const router = useRouter();

const getIcon = (iconName: string) => {
  return new URL(`../assets/${iconName}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.dashboard-sidebar-panel {
  width: 340px;
  background-color: $primary;
  height: 100%;

  display: flex;
  flex-direction: column;
  overflow-x: hidden;
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
}
</style>

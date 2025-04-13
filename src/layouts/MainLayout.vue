<template>
  <q-layout view="lHh lpR lFf">
    <div class="layout__container">
      <!-- Sidebar -->
      <DashboardSidebar />

      <!-- Main Content -->
      <q-page-container>
        <router-view class="main-section" />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import DashboardSidebar from "../components/common/DashboardSidebar.vue";
</script>

<style lang="scss" scoped>
.layout__container {
  display: flex;
}
</style>

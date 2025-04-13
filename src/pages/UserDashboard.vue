<template>
  <div class="page__container">
    <div
      class="user-dashboard__section flex justify-center small-screen-padding"
    >
      <InfoSection></InfoSection>
      <div class="full-width dashboard__wrapper mobile__top-section">
        <DashboardPanel></DashboardPanel>
      </div>
      <MobileFooter></MobileFooter>
    </div>
  </div>
</template>

<script setup lang='ts'>
import InfoSection  from "../components/InfoSection.vue";
import DashboardPanel from "../components/DashboardPanel.vue";
import MobileFooter from "../components/common/MobileFooter.vue";
</script>

<style lang="scss">
.page__container {
  display: flex;
  @media (min-width: $breakpoint-sm-min) {
  padding: 48px 60px;
    
  }
}


.user-dashboard__section {
  width: 100%;
  max-width: 1402px;
  margin-left: 340px;
  @media (max-width: $breakpoint-sm-max) {
    margin-left: 0px;
    
  }
}

</style>

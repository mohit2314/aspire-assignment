<template>
  <div class="debit-card-skeleton">
    <div class="row justify-end">
      <q-skeleton type="QChip" width="40%" />
    </div>

    <div style="margin-top: 16px">
      <q-skeleton type="rect" width="40%" class="q-mb-md" />
      <q-skeleton type="text" width="60%" />
    </div>
    <div class="row q-gutter-sm" style="margin-top: 12px">
      <q-skeleton type="text" width="30%" />
      <q-skeleton type="text" width="30%" />
      <q-skeleton type="text" width="30%" />
    </div>
    <div class="row justify-end q-mt-lg">
      <q-skeleton type="QBtn" width="40%" />
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style>
.debit-card-skeleton {
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  height: 240px;
}
</style>
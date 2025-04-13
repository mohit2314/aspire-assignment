<template>
  <q-dialog v-model="isDialogOpen" persistent>
    <q-card class="q-pa-md add-new-card-modal full-width" style="max-width: 550px">
      <q-card-section>
        <div class="text-h6 row items-center">
          <q-icon class="q-mr-sm" name="credit_card"></q-icon> Add New Card
        </div>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="cardName"
          label="Card Name"
          outlined
          dense
          autofocus
          :rules="[(val) => !!val || 'Card name is required']"
        />
        <div class="q-mt-md">
          <div class="card-info">
            <q-icon name="info" /> Card number will be alloted once card added.
          </div>
          <div class="card-info">
            <q-icon name="info" /> Expiry date will be auto generated.
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn
          label="Add Card"
          color="blue-10"
          @click="handleAddCard"
          :disable="!cardName"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits(["add-card"]);

const isDialogOpen = ref(false);
const cardName = ref("");

const openDialog = () => {
  isDialogOpen.value = true;
};

const handleAddCard = () => {
  emit("add-card", cardName.value);
  cardName.value = "";
};
</script>
<style lang="scss">
.add-new-card-modal {
  .card-info {
    border-radius: 16px;
    padding: 4px;
    background-color: #f5f9ff;
    color: $secondary-text;
    margin-bottom: 12px;
  }
}
</style>
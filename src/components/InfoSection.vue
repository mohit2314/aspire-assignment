<template>
  <div class="info-section__wrapper mobile__top-section">
    <div class="mobile-logo flex justify-end xs">
      <div><img src="../assets/Logo_mobile.svg" alt="aspire-logo" /></div>
    </div>
    <div class="info__section">
      <div class="balance__col">
        <div class="label mobile__font-color gt-sm">Available Balance</div>
        <div class="label mobile__font-color text-weight-bold lt-sm">
          Account Balance
        </div>

        <div class="balance__info">
          <div class="currency__badge"><span>$$</span></div>
          <div class="amount mobile__font-size">3,000</div>
        </div>
      </div>
      <!-- CTA Btn -->
      <div class="new__card--cta self-end">
        <div class="q-mt-lg flex align-center new__card-link xs">
          <img src="../assets/box.svg" alt="" class="q-mr-xs" />
          <span style="color: #23cefd; font-weight: 600" @click="showAddCardModal = true">New card</span>
        </div>
        <q-btn class="new__card-btn gt-xs" icon="add_circle" label="New card" no-caps
          @click="showAddCardModal = true"></q-btn>
      </div>
    </div>
    <AddCardModal v-model="showAddCardModal" @add-card="addCardToList" />
  </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import AddCardModal from "../components/common/AddNewCardModal.vue";
import { useDebitCardStore } from "../stores/debitCardStore";

const debitCardStore = useDebitCardStore();

const showAddCardModal = ref(false);
// const openAddCardModal = () => {
//   cardModal.value?.openDialog();
// };
const addCardToList = (cardName: string) => {
  debitCardStore.addCard(cardName);
  showAddCardModal.value = false;
};
</script>

<style lang="scss">
.info-section__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 34px;

  @media (max-width: $breakpoint-xs) {
    margin-bottom: 0;
  }

  .mobile-logo {
    max-width: 500px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 12px 36px 0px 0px;
  }

  .info__section {
    min-width: 372px;
    // max-width: 906px;
    // padding: 12px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .balance__col {
    display: flex;
    flex-direction: column;

    .label {
      font-size: 14px;
      color: $text-black-300;
    }

    .balance__info {
      display: flex;
      align-items: center;
      margin-top: 16px;

      .currency__badge {
        text-align: center;
        background-color: $secondary;
        padding: 2px;
        color: #fff;
        border-radius: 4px;
        font-size: 13px;
        width: 40px;
        height: 24px;
        margin-right: 10px;

        // font-weight: 500;
      }

      .amount {
        font-size: 26px;
        font-weight: 600;
      }
    }
  }

  .new__card-btn {
    background: $secondary-text;
    color: white;
    font-size: 13px;
    font-weight: 600;
  }
}
</style>

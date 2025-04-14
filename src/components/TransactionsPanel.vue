<template>
  <div class="recent__transaction--content">
    <div
      v-for="(transaction, k) in transactionsList"
      :key="k"
      class="transaction__row"
    >
      <div class="icon">
        <img :src="getIconUrl(transaction.icon)" alt="transaction.icon" />
      </div>
      <div class="info">
        <div class="name">Hamleys</div>
        <div class="date">20 May 2020</div>
        <div class="refund__detail">
          <div class="icon">
            <img src="../assets/business-and-finance.svg" alt="" />
          </div>
          Refund on debit card
        </div>
      </div>
      <div class="amount">
        <span
          :style="{
            color: transaction.transactionType == 'credit' ? '' : '#000',
          }"
          >{{
            transaction.transactionType == "credit" ? `+ S$ 150` : `- S$ 150`
          }}</span
        >
        <!-- <q-icon name="chevron_right"></q-icon> -->
        <img class="q-ml-sm" src="../assets/next.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { useImage } from "../composables/utils";

const { getIconUrl } = useImage();

const transactionsList = [
  {
    icon: "file-storage.svg",
    name: "Hamleys",
    transactionType: "credit",
  },
  {
    icon: "flights.svg",
    name: "Hamleys",
    transactionType: "debit",
  },
  {
    icon: "megaphone.svg",
    name: "Hamleys",
    transactionType: "debit",
  },
  {
    icon: "file-storage.svg",
    name: "Hamleys",
    transactionType: "debit",
  },
];
</script>

<style lang='scss'>
.recent__transaction--content {
  padding: 8px 16px;
  outline: 1px solid #f0f0f0;
  .transaction__row {
  // width: 318px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;
  // align-items: center;
  margin: 14px 0px;
  .icon {
    height: 48px;
    width: 48px;
    background-color: #009dff1a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    width: 60%;
    .name {
      color: $text-black-300;
      font-size: 14px;
      font-weight: 600;
    }
    .date {
      font-size: 13px;
      color: #aaaaaa;
      margin-top: 4px;
    }
    .refund__detail {
      margin-top: 8px;
      font-size: 12px;
      color: #325baf;
    }
  }

  .refund__detail {
    display: flex;
    .icon {
      height: 20px;
      width: 24px;
      background-color: #325baf;
      margin-right: 8px;
    }
  }
  .amount {
    color: #01d167;
    font-size: 14px;
    font-weight: 600;
  }
}
}

</style>
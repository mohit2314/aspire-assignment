<template>
  <div class="dashboard__panel small-screen-padding">
    <div class="cards__tab--row">
      <span class="card__tab --active"> My debit cards </span>
      <span class="card__tab"> All company cards </span>
    </div>
    <div class="dashboard__card-body row small-screen-padding">
      <div class="left-col col-xs-12 col-sm-8 col-md-6">
        <!-- Carousel Section -->
        <div class="carousel__section">
          <div class="view__card-wrap">
            <div class="view__card-number">
              <img
                src="../assets/remove_red_eye-24px.svg"
                alt=""
                style="margin-right: 4px"
              />

              Show card number
            </div>
          </div>
          <DebitCardShimmer v-show="loading" />
          <q-carousel
            v-show="!loading"
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="green-3"
            navigation
            :navigation-position="'bottom'"
            infinite
            height="300px"
            class="bg-transparent rounded-borders"
          >
            <q-carousel-slide
              v-for="debitCard in userDebitCards"
              :key="debitCard.number"
              :name="debitCard.id"
              style="padding: 0px"
            >
              <DebitCard :debit-card="debitCard" :isFreeze="isCurrentCardFreezeStatus"></DebitCard>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <!-- Card features options -->
        <CardFeatures :current-card-id="slide" :isFreeze="isCurrentCardFreezeStatus"/>
      </div>
      <div class="right-col col-xs-12 col-sm-8 col-md-6 mobile__bottom-section">
        <div style="max-width: 366px; margin: auto">
          <div class="accordian-header">
            <div>
              <img
                class="accordian-icon"
                src="../assets/Card_details.svg"
                alt=""
              />
            </div>
            <div class="label">Card details</div>
            <div class="expand-icon">
              <img src="../assets/down-arrow.svg" alt="" />
            </div>
          </div>
          <!-- Expanded accordian -->
          <div class="accordian-header --expanded">
            <div>
              <img
                class="accordian-icon"
                src="../assets/recent_transc.svg"
                alt=""
              />
            </div>
            <div class="label">Recent Transactions</div>
            <div class="expand-icon expanded-icon">
              <img src="../assets/down-arrow.svg" alt="" />
            </div>
          </div>
          <!-- User transactions -->
          <TransactionsPanel />
          <!-- View all transactions -->
          <div class="view-all">
            <span> View all transaction</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import DebitCard from "./common/DebitCard.vue";
import DebitCardShimmer from "./common/DebitCardShimmer.vue";
import TransactionsPanel from "./TransactionsPanel.vue";
import CardFeatures from "./CardFeatures.vue";
import { ref, computed } from "vue";
import { onMounted } from "vue";
import { useDebitCardStore } from "../stores/debitCardStore";
import { useImage } from "../composables/utils";

const { getIconUrl } = useImage();
const debitCardStore = useDebitCardStore();

onMounted(() => {
  debitCardStore.fetchCards(); // Load on app start
});
const slide = ref("1");

const userDebitCards = computed(() => debitCardStore.cards);
const loading = computed(() => debitCardStore.loading);

const isCurrentCardFreezeStatus = computed(() => {
  const currentCard = userDebitCards.value.find(
    (card) => card.id === slide.value
  );
  return currentCard ? currentCard.isFrozen : false;
});

</script>

<style lang="scss">
.dashboard__panel {
  //  padding: 12px;
}
.cards__tab--row {
  .card__tab {
    font-size: 14px;
    padding: 4px;
    margin-right: 12px;
    opacity: 30%;
  }

  .--active {
    opacity: 100%;
    border-bottom: 2px solid #23cefd;
  }
}

.dashboard__card-body {
  box-shadow: 0px 2px 12px #00000014;
  margin-top: 20px;
  display: flex;
  padding: 36px;
  flex-wrap: wrap;
  overflow: hidden;
}

.left-col {
  width: 55%;
}
.view__card-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5px;
}
.view__card-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 154px;
  padding: 2px;

  color: #01d167;
  font-size: 12px;
  font-weight: 600;
}

.carousel__section {
  max-width: 414px;
  width: 100%;
}

.right-col {
  // width: 45%;
}

.accordian-icon {
  height: 54px;
  width: 24px;
}

.accordian-header {
  padding: 12px;
  background-color: #f5f9ff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #f5f5f5;
  box-shadow: 0px 0px 8px #0000000a;
  border-radius: 6px;
  max-width: 366px;
  height: 72px;
  color: #0c365a;
  margin-bottom: 16px;
  .expanded-icon {
    transform: rotate(180deg);
  }
  .--expanded {
    border: 1px solid #fcfcfc;
    height: 520px;
  }
}
.accordian-header:hover {
  background-color: #f5f9ff;
}

.view-all {
  width: 366px;
  height: 42px;
  background-color: #edfff5;
  color: #01d167;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid #ddffec;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
</style>

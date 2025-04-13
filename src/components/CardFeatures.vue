<template>
  <div class="features__section">
    <div class="feature" @click="handleCardActions('freeze')">
      <div class="feature__icon">
        <img :src="getIconUrl('Freeze_card.svg')" alt="" />
      </div>
      <div class="feature__label">
        {{ isFreeze ? "Unfreeze card" : "Freeze card" }}
      </div>
    </div>
    <div v-for="feature in featuresList" :key="feature" class="feature">
      <div class="feature__icon">
        <img :src="getIconUrl(feature.icon)" alt="" />
      </div>
      <div class="feature__label">
        {{ feature.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed, defineProps } from "vue";
import { useImage } from "../composables/utils";
import { useDebitCardStore } from "../stores/debitCardStore";

const props = defineProps<{
  currentCardId: string;
  isFreeze: boolean;
}>()
const debitCardStore = useDebitCardStore();

const { getIconUrl } = useImage();
const featuresList = [
  {
    icon: "spend_limit.svg",
    label: "Set spend limit",
  },
  {
    icon: "GPay.svg",
    label: "Add to GPay",
  },
  {
    icon: "Replace_card.svg",
    label: "Replace card",
  },
  {
    icon: "Deactivate_card.svg",
    label: "Cancel card",
  },
];

const userDebitCards = computed(() => debitCardStore.cards);

function handleCardActions(cardAction: string) {
  const currentCard = userDebitCards.value.find(
    (card) => card.id === props.currentCardId
  );

  if (!currentCard) return;
  if (cardAction === "freeze") {
    debitCardStore.toggleFreeze(currentCard.id);
    console.log(
      `Card ${currentCard.id} is now`,
      currentCard.isFrozen ? "Frozen" : "Unfrozen"
    );
  }
}
</script>

<style lang='scss'>
.features__section {
  padding: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 375px;
  max-width: 414px;
  width: 100%;
  max-height: 116px;
  background-color: #edf3ff;
  border-radius: 10px;
  margin-top: 24px;

  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    .feature__label {
      color: #0c365a;
      font-size: 13px;
      margin-top: 6px;
      text-align: center;
      max-width: 60px;
    }
  }
}
</style>
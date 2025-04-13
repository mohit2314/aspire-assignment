import { defineStore } from 'pinia';
import { cardService } from '../services/debitCardServices.js';

export interface DebitCard {
  id: string;
  name: string;
  number: string;
  expiry: string;
  bgColor?: string; 
  isFrozen: boolean;
}


export const useDebitCardStore = defineStore('debitCardStore', {
  state: () => ({
    cards: [] as DebitCard[],
    loading: false
  }),

  actions: {
    async fetchCards() {
      this.loading = true;
      this.cards = await cardService.fetchCards();
      console.log(this.cards);
      this.loading = false;
    },

    async addCard(name: string) {
      this.loading = true;
      const newCard = await cardService.addCard(name);
      this.cards.push(newCard);
      this.loading = false;
    },
    toggleFreeze(cardId: string) {
      const card = this.cards.find((c) => c.id === cardId);
      if (card) {
        card.isFrozen = !card.isFrozen;
      }
    }
  }
});


import { DebitCard } from '../stores/debitCardStore.js';

const colorPalette = [
  '#01D167', // Green
  '#3F51B5', // Indigo
  '#009688', // Teal
  '#E91E63', // Pink
  '#4CAF50', // Green
  '#FFC107', // Amber
  '#9C27B0', // Purple
  '#00BCD4', // Cyan
  '#FF5722', // Deep Orange
] as string[];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function getRandomColor(): string {
  const index = Math.floor(Math.random() * colorPalette.length);
  return colorPalette[index] as string;
}
let mockCards: DebitCard[] = [
  {
    id: '1',
    name: 'Mark Henry',
    number: '1234 5678 9012 3456',
    expiry: '12/26',
    bgColor: getRandomColor(),
    isFrozen: false
  },
  {
    id: '2',
    name: 'Mohit Patel',
    number: '9876 5432 1098 7654',
    expiry: '11/27',
    bgColor: getRandomColor(),
    isFrozen: false
  }
];

export const cardService = {
  async fetchCards(): Promise<DebitCard[]> {
    await delay(1000); // Mocking api delay
    return mockCards;
  },

  async addCard(name: string): Promise<DebitCard> {
    await delay(3000);

    const newCard: DebitCard = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      number: generateRandomCardNumber(),
      expiry: generateRandomExpiry(),
      bgColor: getRandomColor(),
      isFrozen:false
    };
    return newCard;
  }
};

function generateRandomCardNumber() {
  return Array(4)
    .fill(0)
    .map(() => Math.floor(1000 + Math.random() * 9000))
    .join(' ');
}

function generateRandomExpiry() {
  const month = String(Math.floor(Math.random() * 12 + 1)).padStart(2, '0');
  const year = String(new Date().getFullYear() + Math.floor(Math.random() * 5));
  return `${month}/${year.slice(-2)}`;
}

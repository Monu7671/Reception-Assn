export interface ICardsProps {
  prices: {
    basic: number;
    professional: number;
    master: number;
  };
}

export interface ICardProps {
  type: string;
  price: number;
  features: string[];
}

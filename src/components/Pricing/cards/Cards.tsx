import Card from "./Card";

import type { ICardsProps } from "./types";

export default function Cards({ prices }: ICardsProps): JSX.Element {
  const cards = {
    basic: {
      type: "Basic",
      features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    professional: {
      type: "Professional",
      features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    master: {
      type: "Master",
      features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  };

  return (
    <div className="cards-wrapper">
      <Card {...cards.basic} price={prices.basic} />
      <Card {...cards.professional} price={prices.professional} />
      <Card {...cards.master} price={prices.master} />
    </div>
  );
}

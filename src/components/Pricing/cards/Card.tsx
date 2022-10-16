import type { ICardProps } from "./types";

export default function Card({ type, price, features }: ICardProps): JSX.Element {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div className="type">{type}</div>
        <h1 className="pricing">
          <span className="usd">$</span>
          <span>{price}</span>
        </h1>
        <div className="features-wrapper">
          {features.map((feature) => (
            <div className="feature" key={feature}>
              {feature}
            </div>
          ))}
        </div>
        <button>
          <a href="/">LEARN MORE</a>
        </button>
      </div>
    </div>
  );
}

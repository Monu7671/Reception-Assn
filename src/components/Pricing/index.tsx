import { useMemo, useState } from "react";

import Toggle from "./toggle/Toggle";
import Bg from "./bg/Bg";
import Cards from "./cards/Cards";

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);

  const prices = {
    basic: isMonthly ? 19.99 : 199.99,
    professional: isMonthly ? 24.99 : 249.99,
    master: isMonthly ? 39.99 : 399.99,
  };

  return (
    <>
      <Bg />
      <main>
        <h1 className="heading">Our Pricing</h1>
        <Toggle setIsMonthly={setIsMonthly}/>
        <Cards prices={prices} />
      </main>
    </>
  );
}

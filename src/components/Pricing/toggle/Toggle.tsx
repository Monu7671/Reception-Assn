import type { ChangeEventHandler } from "react";
import type { IToggleProps } from "./types";

export default function Toggle({ setIsMonthly }: IToggleProps): JSX.Element {
  // Toggle change action
  const onToggleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // Setting isMonthly to inverse after some time because of animation
    setTimeout(() => {
      setIsMonthly((prev) => !prev);
    }, 100);
  };

  return (
    <div className="time-selector">
      <span>Annually</span>
      <div className="toggle">
        <input type="checkbox" onChange={onToggleChange} />
        <label></label>
      </div>
      <span>Monthly</span>
    </div>
  );
}

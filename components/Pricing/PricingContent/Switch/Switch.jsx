import Switch from "react-switch";
import styles from "./Switch.module.scss";
import { useState } from "react";

function PricingSwitch({ isPriceMonthChecked, setIsPriceMonthChecked }) {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    setIsPriceMonthChecked(
      (prevIsPriceMonthChecked) => !prevIsPriceMonthChecked
    );
  };
  return (
    <label className={styles.switch}>
      <span
        className={
          isPriceMonthChecked
            ? styles["switch__text--black"]
            : styles["switch__text--grey"]
        }
      >
        Monthly
      </span>
      <Switch
        onChange={handleChange}
        checked={checked}
        onColor={"#000000"}
        offColor={"#D3D3D3"}
        offHandleColor={"#000000"}
        checkedIcon={false}
        uncheckedIcon={false}
        className="react-switch"
      />
      <span
        className={
          isPriceMonthChecked
            ? styles["switch__text--grey"]
            : styles["switch__text--black"]
        }
      >
        Yearly
      </span>
    </label>
  );
}

export default PricingSwitch;

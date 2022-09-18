import styles from "./PricingContent.module.scss";
import { useState } from "react";
import PricingSwitch from "./Switch/Switch";
import PricingBox from "./PricingBoxes/PricingBox";

const basicContent = {
  title: "Basic",
  text: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
  monthPrice: "£19.00",
  yearPrice: "£190.00",
};

const proContent = {
  title: "Pro",
  text: "More advanced features available. Recommended for photography veterans and professionals.",
  monthPrice: "£39.00",
  yearPrice: "£390.00",
};

const businessContent = {
  title: "Business",
  text: "Additional features available such as more detailed metrics. Recommended for business owners.",
  monthPrice: "£99.00",
  yearPrice: "£990.00",
};

function PricingContent() {
  const [isPriceMonthChecked, setIsPriceMonthChecked] = useState(true);
  return (
    <div className={styles.pricingContainer}>
      <PricingSwitch
        setIsPriceMonthChecked={setIsPriceMonthChecked}
        isPriceMonthChecked={isPriceMonthChecked}
      />
      <div className={styles.pricingContainer__boxesContainer}>
        <PricingBox
          color="light"
          content={basicContent}
          isPriceMonthChecked={isPriceMonthChecked}
        />
        <PricingBox
          color="dark"
          content={proContent}
          isPriceMonthChecked={isPriceMonthChecked}
        />
        <PricingBox
          color="light"
          content={businessContent}
          isPriceMonthChecked={isPriceMonthChecked}
        />
      </div>
    </div>
  );
}

export default PricingContent;

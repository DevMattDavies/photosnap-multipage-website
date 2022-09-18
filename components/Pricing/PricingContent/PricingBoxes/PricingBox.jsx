import styles from "./PricingBox.module.scss";

// month/year state
// grey/black

function PricingBox({ color, content, isPriceMonthChecked }) {
  return (
    <div
      className={
        color === "light"
          ? [styles.pricingBox, styles["pricingBox--grey"]].join(" ")
          : [styles.pricingBox, styles["pricingBox--black"]].join(" ")
      }
    >
      <h3
        className={
          color === "light"
            ? styles["pricingBox__title--grey"]
            : styles["pricingBox__title--black"]
        }
      >
        {content.title}
      </h3>
      <p
        className={
          color === "light"
            ? styles["pricingBox__text--grey"]
            : styles["pricingBox__text--black"]
        }
      >
        {content.text}
      </p>
      <div className={styles.PricingBox__priceContainer}>
        <p
          className={
            color === "light"
              ? styles["pricingBox__price--grey"]
              : styles["pricingBox__price--black"]
          }
        >
          {isPriceMonthChecked ? content.monthPrice : content.yearPrice}
        </p>
        <p className={styles["pricingBox__monthYearText"]}>
          {isPriceMonthChecked ? `per month` : `per year`}
        </p>
      </div>
      <button
        className={
          color === "light"
            ? styles["pricingBox__button--black"]
            : styles["pricingBox__button--white"]
        }
        type="button"
      >
        PICK PLAN
      </button>
    </div>
  );
}

export default PricingBox;

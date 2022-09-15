import styles from "./PricingHero.module.scss";
import { useContext } from "react";
import { WidthContext } from "../../../pages/_app";

function PricingHero() {
  const width = useContext(WidthContext);
  return (
    <div className={styles.grid}>
      {width <= 480 && (
        <img
          className={styles.grid__image}
          src="/assets/pricing/mobile/hero.jpg"
          alt="pricing hero"
        ></img>
      )}
      {width > 480 && width < 1008 && (
        <img
          className={styles.grid__image}
          src="/assets/pricing/tablet/hero.jpg"
          alt="features hero"
        ></img>
      )}
      {width >= 1008 && (
        <img
          className={styles.grid__image}
          src="/assets/pricing/desktop/hero.jpg"
          alt="features hero"
        ></img>
      )}
      <div className={styles.grid__blackTile}>
        <div
          className={[
            styles["grid__textContainer--black"],
            styles.grid__borderGradient,
          ].join(" ")}
        >
          <h1 className={styles.grid__title}>PRICING</h1>
          <p className={styles["grid__textBody--grey"]}>
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingHero;

import styles from "./FeaturesHero.module.scss";
import { useContext } from "react";
import { WidthContext } from "../../../pages/_app";

function FeaturesHero() {
  const width = useContext(WidthContext);
  return (
    <div className={styles.grid}>
      {width <= 480 && (
        <img
          className={styles.grid__image}
          src="/assets/features/mobile/hero.jpg"
          alt="features hero"
        ></img>
      )}
      {width > 480 && width < 1008 && (
        <img
          className={styles.grid__image}
          src="/assets/features/tablet/hero.jpg"
          alt="features hero"
        ></img>
      )}
      {width >= 1008 && (
        <img
          className={styles.grid__image}
          src="/assets/features/desktop/hero.jpg"
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
          <h1 className={styles.grid__title}>FEATURES</h1>
          <p className={styles["grid__textBody--grey"]}>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesHero;

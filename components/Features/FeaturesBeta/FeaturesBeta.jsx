import styles from "./FeaturesBeta.module.scss";
import { useContext } from "react";
import { WidthContext } from "../../../pages/_app";

function FeaturesBeta() {
  const width = useContext(WidthContext);

  return (
    <div className={styles.betaContainer}>
      {width <= 480 && (
        <img
          className={styles.betaContainer__image}
          src="/assets/shared/mobile/bg-beta.jpg"
        ></img>
      )}
      {width > 480 && width < 1008 && (
        <img
          className={styles.betaContainer__image}
          src="/assets/shared/tablet/bg-beta.jpg"
        ></img>
      )}
      {width >= 1008 && (
        <img
          className={styles.betaContainer__image}
          src="/assets/shared/desktop/bg-beta.jpg"
        ></img>
      )}
      <div
        className={[
          styles["betaContainer__textContainer"],
          styles.betaContainer__borderGradient,
        ].join(" ")}
      >
        <h2 className={styles.betaContainer__title}>
          WE'RE IN BETA. GET YOUR INVITE TODAY!
        </h2>
        <div className={styles.betaContainer__invite}>
          <h4 className={styles.betaContainer__inviteText}>GET AN INVITE</h4>
          <img
            className={styles.betaContainer__inviteArrow}
            src="/assets/shared/desktop/arrow.svg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default FeaturesBeta;

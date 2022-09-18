import PricingContent from "./PricingContent/PricingContent";
import PricingHero from "./PricingHero/PricingHero";
import FeaturesBeta from "../Features/FeaturesBeta/FeaturesBeta";
import CompareMobile from "./Compare/Mobile/CompareMobile";
import CompareDesktop from "./Compare/Desktop/CompareDesktop";
import { WidthContext } from "../../pages/_app";
import { useContext } from "react";

function PricingPage() {
  const width = useContext(WidthContext);
  return (
    <>
      <PricingHero />
      <PricingContent />
      {width <= 480 ? <CompareMobile /> : <CompareDesktop />}
      <FeaturesBeta />
    </>
  );
}

export default PricingPage;

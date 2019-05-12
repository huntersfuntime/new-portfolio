import React from "react";

import PortfolioContainer from "../portfolio/portfolio-container";
import ArtComponent from "../molecules/art";
import LanguageBanner from "../molecules/languages-banner";

export default function() {
  return (
    <div>
      <ArtComponent />
      <LanguageBanner />
      <PortfolioContainer />
    </div>
  );
}

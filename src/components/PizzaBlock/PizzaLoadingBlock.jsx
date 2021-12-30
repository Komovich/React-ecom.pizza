import React from "react";
import ContentLoader from "react-content-loader"

const PizzaLoadingBlock = () => {

    return(
        <ContentLoader 
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="133" cy="139" r="120" /> 
        <rect x="3" y="276" rx="3" ry="3" width="280" height="26" /> 
        <rect x="3" y="313" rx="6" ry="6" width="280" height="84" /> 
        <rect x="3" y="412" rx="3" ry="3" width="91" height="31" /> 
        <rect x="136" y="407" rx="20" ry="20" width="140" height="43" />
      </ContentLoader>
      )
}

export default PizzaLoadingBlock
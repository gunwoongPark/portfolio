import React from "react";
import { useMediaQuery } from "react-responsive";

function MediaQuery() {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <>
      {isPc ? console.log("pc!") : console.log("")}
      {isTablet ? console.log("tab!") : console.log("")}
      {isMobile ? console.log("mob!") : console.log("")}
    </>
  );
}

export default MediaQuery;

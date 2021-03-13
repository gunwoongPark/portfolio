import React, { useEffect } from "react";
import HeaderPresenter from "./HeaderPresenter";

function HeaderContainer() {
  useEffect(() => {
    console.log(document.querySelector("#About"));
  }, []);
  return <HeaderPresenter />;
}

export default HeaderContainer;

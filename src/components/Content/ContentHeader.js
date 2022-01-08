import React from "react";
import Buttons from "./Buttons";

import Search from "./Search";
const ContentHeader = () => {
  return (
    <header className="content-header">
      <Search />
      <Buttons />
    </header>
  );
};

export default ContentHeader;

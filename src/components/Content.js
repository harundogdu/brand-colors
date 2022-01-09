import React from "react";
import ContentHeader from "components/Content/ContentHeader";
import ContentBody from "components/Content/ContentBody";
import { useSelector } from "react-redux";
import Copied from "./Content/Copied";

const Content = () => {
  const { copied } = useSelector((state) => state.brands);

  return (
    <div className="content">
      {copied && <Copied color={copied} />}
      <ContentHeader />
      <ContentBody />
    </div>
  );
};

export default Content;

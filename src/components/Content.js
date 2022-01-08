import React from "react";
import ContentHeader from "components/Content/ContentHeader";
import ContentBody from "components/Content/ContentBody";
import { setCopied } from "redux/brands/brandsSlice";
import { useDispatch, useSelector } from "react-redux";
import Copied from "./Content/Copied";

const Content = () => {
  const { copied } = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setCopied(false));
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied, dispatch]);

  return (
    <div className="content">
      {copied && <Copied color={copied} />}
      <ContentHeader />
      <ContentBody />
    </div>
  );
};

export default Content;

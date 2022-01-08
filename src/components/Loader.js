import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="5" y="12" rx="0" ry="0" width="88" height="10" />
      <rect x="3" y="41" rx="0" ry="0" width="90" height="46" />
      <rect x="104" y="42" rx="0" ry="0" width="90" height="46" />
      <rect x="207" y="42" rx="0" ry="0" width="90" height="46" />
    </ContentLoader>
  );
};

export default Loader;

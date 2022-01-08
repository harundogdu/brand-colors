import React, { useState } from "react";
import brandColors from "assets/data/brandColors.json";
import BrandCard from "./BrandCard";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload";
import Loader from "components/Loader";
const ContentBody = () => {
  const { selectedBrands } = useSelector((state) => state.brands);
  let allBrandArray = [];

  Object.keys(brandColors).map((key) => allBrandArray.push(brandColors[key]));

  const [brands, setBrands] = useState(allBrandArray);

  React.useEffect(() => {
    if (selectedBrands) {
      console.log(selectedBrands);
    }
  }, [selectedBrands]);

  return (
    <div className="content-body">
      {brands.map((brand, index) => (
        <LazyLoad key={index} once={true} overflow={true} placeholder={<Loader />}>
          <BrandCard brand={brand} />
        </LazyLoad>
      ))}
    </div>
  );
};

export default ContentBody;

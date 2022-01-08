import React, { useState } from "react";
import brandColors from "assets/data/brandColors.json";
import BrandCard from "./BrandCard";
const ContentBody = () => {
  let allBrandArray = [];

  Object.keys(brandColors).map((key) => {
    allBrandArray.push(brandColors[key]);
  });

  const [brands, setBrands] = useState(allBrandArray);

  return (
    <div className="content-body">
      {brands.map((brand, index) => {
        return <BrandCard key={index} brand={brand} />;
      })}
    </div>
  );
};

export default ContentBody;

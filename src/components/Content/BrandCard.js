import React from "react";
import { getContrastYIQ } from "assets/helper";
const BrandCard = ({ brand }) => {
  const [selectedBrands, setSelectedBrands] = React.useState([]);

  const handleSelectedBrand = () => {
    console.log("clicked");
  };

  return (
    <div className="brand">
      <h6 onClick={handleSelectedBrand} className="title">
        {brand.title}
      </h6>
      <div className="brand-color">
        {brand.colors.map((color, index) => {
          return (
            <div
              key={index}
              className="color"
              style={{
                backgroundColor: `#${color}`,
                color: getContrastYIQ(`${color}`),
              }}
            >
              #{color}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandCard;

import React from "react";
import { getContrastYIQ } from "assets/helper";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedBrand, setCopied } from "redux/brands/brandsSlice";
import Clipboard from "react-clipboard.js";

const BrandCard = ({ brand }) => {
  const dispatch = useDispatch();
  const { selectedBrands } = useSelector((state) => state.brands);

  const handleSelectedBrand = () => {
    dispatch(addSelectedBrand(brand));
  };

  const setColor = (color) => {
    dispatch(setCopied(color));
  };

  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <h6 onClick={handleSelectedBrand} className="title">
        {brand.title}
      </h6>
      <div className="brand-color">
        {Array.isArray(brand.colors) &&
          brand.colors.map((color, index) => {
            return (
              <Clipboard
                component={"div"}
                data-clipboard-text={color}
                key={index}
                className={`color ${
                  selectedBrands.includes(brand.slug) ? "selected" : ""
                }`}
                style={{
                  backgroundColor: `#${color}`,
                  color: getContrastYIQ(`${color}`),
                }}
                onClick={() => setColor(color)}
              >
                #{color}
              </Clipboard>
            );
          })}
      </div>
    </div>
  );
};

export default BrandCard;

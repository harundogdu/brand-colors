import React, { useMemo } from "react";
import BrandCard from "./BrandCard";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload";
import Loader from "components/Loader";
const ContentBody = () => {
  const { allBrands, searchText } = useSelector((state) => state.brands);

  const filteredDatas = useMemo(() => {
    if (searchText.length > 0) {
      const filteredBrand = allBrands.filter((brand) =>
        brand.title.toLowerCase().includes(searchText.toLowerCase())
      );
      return filteredBrand;
    } else {
      return allBrands;
    }
  }, [allBrands, searchText]);

  return (
    <div className="content-body">
      {filteredDatas.map((brand, index) => (
        <LazyLoad
          key={index}
          once={true}
          overflow={true}
          placeholder={<Loader />}
        >
          <BrandCard brand={brand} />
        </LazyLoad>
      ))}
    </div>
  );
};

export default ContentBody;

import React, { useMemo } from "react";
import brandColors from "assets/data/brandColors.json";
import BrandCard from "./BrandCard";
import { useDispatch, useSelector } from "react-redux";
import LazyLoad from "react-lazyload";
import Loader from "components/Loader";
import { setAllBrands } from "redux/brands/brandsSlice";
const ContentBody = () => {
  const dispatch = useDispatch();
  const { allBrands, searchText } = useSelector(
    (state) => state.brands
  );

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

  React.useEffect(() => {
    dispatch(setAllBrands(brandColors));
  }, [dispatch]);

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

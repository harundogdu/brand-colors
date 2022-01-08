import React, { useMemo } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "redux/brands/brandsSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.brands);
  const handleChangeText = useMemo(() => {
    return (e) => {
      dispatch(setSearchText(e.target.value));
    };
  }, [dispatch]);

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search brand colors..."
        value={searchText}
        onChange={handleChangeText}
      />
      <span className="search-icon">
        <AiOutlineSearch size={24} color="#d0d0d0" />
      </span>
    </div>
  );
};

export default Search;

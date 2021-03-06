import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedBrands: [],
  copied: false,
  allBrands: [],
  searchText: "",
};

export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    addSelectedBrand: (state, action) => {
      const { selectedBrands } = state;
      const { slug } = action.payload;
      if (selectedBrands.includes(slug)) {
        state.selectedBrands = selectedBrands.filter((brand) => brand !== slug);
      } else {
        selectedBrands.push(slug);
      }
    },
    setSelectedBrand: (state, action) => {
      state.selectedBrands = action.payload;
    },
    clearSelectedBrands: (state) => {
      state.selectedBrands = [];
    },
    setCopied: (state, action) => {
      state.copied = action.payload;
    },
    setAllBrands: (state, action) => {
      const brandColors = action.payload;
      Object.keys(brandColors).map((key) =>
        state.allBrands.push(brandColors[key])
      );
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  addSelectedBrand,
  setCopied,
  setAllBrands,
  setSearchText,
  clearSelectedBrands,
  setSelectedBrand,
} = brandsSlice.actions;

export default brandsSlice.reducer;

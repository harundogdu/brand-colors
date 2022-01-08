import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBrands: [],
  copied: false,
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
      }
      selectedBrands.push(slug);
    },
    setCopied: (state, action) => {
      state.copied = action.payload;
    },
  },
});

export const { addSelectedBrand, setCopied } = brandsSlice.actions;

export default brandsSlice.reducer;

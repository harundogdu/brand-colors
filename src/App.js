import { Routes, Route } from "react-router-dom";
import Sidebar from "components/Sidebar";
import HomePage from "views/HomePage";
import brandColors from "assets/data/brandColors.json";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllBrands, setCopied } from "redux/brands/brandsSlice";

function App() {
  const dispatch = useDispatch();
  const { copied } = useSelector((state) => state.brands);

  React.useEffect(() => {
    dispatch(setAllBrands(brandColors));
  }, [dispatch]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setCopied(false));
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied, dispatch]);

  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

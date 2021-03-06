/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { AiOutlineDownload, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedBrands } from "redux/brands/brandsSlice";

const Buttons = () => {
  const dispatch = useDispatch();
  const { selectedBrands, allBrands } = useSelector((state) => state.brands);
  const [downloadType, setDownloadType] = React.useState("txt");
  const [downloadUrl, setDownloadUrl] = useState("");

  React.useEffect(() => {
    if (selectedBrands.length > 1) {
      let output = "";
      switch (downloadType) {
        case "scss":
          output = ":root {\n";
          selectedBrands.map((slug) => {
            let brand = allBrands.find((b) => b.slug === slug);
            brand.colors.map((color, index) => {
              output += `--brand-${brand.slug}-${index}: #${color}; \n`;
            });
          });
          output += "}\n";
          break;
        case "less":
          output = ":root {\n";
          selectedBrands.map((slug) => {
            let brand = allBrands.find((b) => b.slug === slug);
            brand.colors.map((color, index) => {
              output += `@brand-${brand.slug}-${index}: #${color}; \n`;
            });
          });
          output += "}\n";
          break;
        default:
          selectedBrands.map((slug) => {
            let brand = allBrands.find((b) => b.slug === slug);
            brand.colors.map((color, index) => {
              output += `.brand-${brand.slug}-${index} {color: #${color}} ;\n`;
            });
          });
          output += "}\n";
          break;
      }
      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      };
    }
  }, [allBrands, downloadType, selectedBrands]);

  return (
    <div
      className="btn-container"
      style={{ display: selectedBrands.length > 0 ? "flex" : "none" }}
    >
      <div className="download-area">
        <select
          onChange={(e) => setDownloadType(e.target.value)}
          name="selected"
          id="selected"
          className="select"
        >
          <option value="txt">txt file</option>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a
          className="btn-header"
          download={`brands.${downloadType}`}
          href={downloadUrl}
        >
          <AiOutlineDownload size={24} color="#000" />
        </a>
      </div>
      <button
        onClick={() => dispatch(clearSelectedBrands())}
        className="btn-header"
      >
        <AiOutlineClose size={24} color="#000" />
      </button>
      <span
        className="collected-brands"
        style={{ color: selectedBrands.length ? "#000" : "#dedede" }}
      >
        {selectedBrands.length} brands collected
      </span>
    </div>
  );
};

export default Buttons;

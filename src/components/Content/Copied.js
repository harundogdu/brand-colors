import { getContrastYIQ } from "assets/helper";
import React from "react";

const Copied = ({ color }) => {
  return (
    <div
      className="copied"
      style={{
        "--bgColor": `#${color}`,
        "--textColor": `${getContrastYIQ(color)}`,
      }}
    >
      Copied #{color} to Clipboard
    </div>
  );
};

export default Copied;

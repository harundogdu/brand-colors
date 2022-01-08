import React from "react";
import {
  AiOutlineSearch,
  AiOutlineDownload,
  AiOutlineLink,
  AiOutlineClose,
} from "react-icons/ai";
const ContentHeader = () => {
  return (
    <header className="content-header">
      <div className="search-input">
        <input type="text" placeholder="Search brand colors..." />
        <span className="search-icon">
          <AiOutlineSearch size={24} color="#d0d0d0" />
        </span>
      </div>
      <div className="btn-container">
        <button className="btn-header">
          <AiOutlineDownload size={24} color="#d0d0d0" />
        </button>
        <button className="btn-header">
          <AiOutlineLink size={24} color="#d0d0d0" />
        </button>
        <button className="btn-header">
          <AiOutlineClose size={24} color="#d0d0d0" />
        </button>
        <span>0 brands collected</span>
        <span>|</span>
        <button className="btn-header all-brands">
          <AiOutlineDownload size={24} color="#d0d0d0" />
          <span>All Brands</span>
        </button>
      </div>
    </header>
  );
};

export default ContentHeader;

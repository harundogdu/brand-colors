import React from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <>
      <header className="sidebar">
        <h1 className="logo">
          <a href="/">
            Brand
            <strong>Colors</strong>
          </a>
        </h1>
        <h2>
          The biggest collection of official brand color codes around. Curated
          by
          <a href="https://harundogdu.com" target="_blank" rel="noreferrer">
            @brandcolors
          </a>{" "}
          and <a href="https://github.com/harundogdu">friends</a>.
        </h2>
        <button onClick={toggleModal} className="title">
          About BrandColors
        </button>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        className="about-modal"
      >
        <div className="about-modal-content">
          <h2>About BrandColors</h2>
          <p>
            BrandColors was created by DesignBombs. The goal was to create a
            helpful reference for the brand color codes that are needed most
            often.
          </p>

          <p>
            It's been featured by Smashing Magazine, CSS-Tricks, Web Design
            Depot, Tuts+, and over 2 million pageviews. There are now over 600
            brands with 1600 colors and the collection is always growing.
          </p>
          <button onClick={toggleModal} className="close">
            <AiOutlineClose size={19} />
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Sidebar;

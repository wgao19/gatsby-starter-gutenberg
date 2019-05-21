import React from "react";
import "./style.css";

const Header = ({ imageURL, title, text }) => (
  <header style={{ backgroundImage: `url(${imageURL})` }}>
    <h1>
      <span>{title}</span>
    </h1>
    <section>{text}</section>
  </header>
);
export default Header;

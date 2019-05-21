import React from "react";
import config from "../../../data/SiteConfig";
import "./style.css";

export default () => (
  <footer>
    <span>Built with ❤️</span>
    {config.userLinks.map((userLink, idx) => (
      <React.Fragment>
        <a target="_blank" href={userLink.url} key={idx}>
          {userLink.label}
        </a>
      </React.Fragment>
    ))}
  </footer>
);

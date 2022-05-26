import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const activeStyle = { color: "#F15B2a" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

import React from "react";
import HeaderHeadline from "../components/HeaderHeadline";
import HeaderNavbar from "../components/HeaderNavbar";
import HeaderSearch from "../components/HeaderSearch";

const Header = ({ homepage, headline }) => {
  return (
    <div className="bg-blue-400 text-white">
      <HeaderNavbar />
      {homepage ? <HeaderHeadline headline={headline} /> : ""}
      <HeaderSearch />
    </div>
  );
};

export default Header;

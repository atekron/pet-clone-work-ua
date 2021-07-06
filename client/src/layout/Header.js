import React from "react";
import HeaderHeadline from "../components/HeaderHeadline";
import HeaderNavbar from "../components/HeaderNavbar";
import HeaderSearch from "../components/HeaderSearch";

const Header = ({ homepage, headline }) => {
  return (
    <div className="bg-gradient-to-br from-blue-300 to-blue-600 text-white pt-3 pb-10">
      <div className="max-w-screen-lg mx-auto">
        <HeaderNavbar />
        {homepage ? <HeaderHeadline headline={headline} /> : ""}
        <HeaderSearch />
      </div>
    </div>
  );
};

export default Header;

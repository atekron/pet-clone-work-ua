import React from "react";
import HeaderHeadline from "../components/HeaderHeadline";
import HeaderNavbar from "../components/HeaderNavbar";
import HeaderSearch from "../components/HeaderSearch";

const Header = ({ homepage }) => {
  console.log(homepage);
  return (
    <div>
      <HeaderNavbar />
      {homepage ? <HeaderHeadline /> : ""}
      <HeaderSearch />
    </div>
  );
};

export default Header;

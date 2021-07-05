import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <div className="pb-5 border-b-2 border-opacity-25">
      <div className="flex justify-end">
        <select
          className="bg-transparent mr-5 text-white"
          name="language"
          id="lang"
          defaultValue="eng"
        >
          <option className="text-black" value="ukr">
            Українська
          </option>
          <option className="text-black" value="rus">
            Русский
          </option>
          <option className="text-black" value="eng">
            English
          </option>
        </select>
        <div>
          <p className="flex items-center">
            <span>For Employers</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <Logo />
        <nav className="flex items-center">
          <Link className="ml-5" to="/jobs">
            Find jobs
          </Link>
          <Link className="ml-5" to="/">
            Post resume
          </Link>
          <Link className="ml-5" to="/">
            My dashboard
          </Link>
          <div className="ml-5 inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNavbar;

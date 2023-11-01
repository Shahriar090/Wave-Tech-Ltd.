import React from "react";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaShoppingBag,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavSm = () => {
  return (
    <nav>
      {/* language , usd , social links, and nav links container */}
      <div className="max-w-full container flex justify-between px-4 py-2 border-b-2 bg-[#1abc9c] text-white">
        {/* language and usd div */}
        <div className="flex gap-1">
          <div className="language">
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="m-1">
                ENG
                <IoMdArrowDropdown className="inline-block"></IoMdArrowDropdown>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-[#1abc9c] rounded-box w-24"
              >
                <li>
                  <a>English UK</a>
                </li>
                <li>
                  <a>Bengali</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="usd">
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className=" m-1">
                USD
                <IoMdArrowDropdown className="inline-block"></IoMdArrowDropdown>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-[#1abc9c] rounded-box w-24"
              >
                <li>
                  <a>$USD</a>
                </li>
                <li>
                  <a>Taka</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* all nav links in a dropdown menu and social site icons*/}
        <div className="links-and-social">
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className=" m-1">
              Links
              <IoMdArrowDropdown className="inline-block"></IoMdArrowDropdown>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-50 menu p-2 shadow      bg-base-100 rounded-box w-44 uppercase"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Categories</Link>
              </li>
              <li>
                <Link>Products</Link>
              </li>
              <li>
                <Link>Pages</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Elements</Link>
              </li>
              <li>
                <Link>Special Offer!</Link>
              </li>
              <li>
                <Link>Buy Wave Tech</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="social-icons flex gap-4">
          <Link>
            <FaFacebook></FaFacebook>
          </Link>
          <Link>
            {" "}
            <FaTwitter></FaTwitter>
          </Link>
          <Link>
            <FaInstagram></FaInstagram>
          </Link>
        </div>
      </div>

      {/* drawer, logo and others */}
      <div className="parent flex justify-between px-4 items-center">
        {/* drawer here */}
        <div className="drawer w-3/12">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="drawer-button">
              <GiHamburgerMenu className="text-2xl text-slate-500"></GiHamburgerMenu>
            </label>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-100% min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>

        {/* logo */}

        <div className="logo">
          <h1 className="uppercase font-bold text-md text-slate-500">
            Wave Tech
          </h1>
        </div>

        {/* cart, profile and favorite icons */}

        <div className="icons flex gap-3 text-slate-500">
          <Link>
            <FaUserAlt></FaUserAlt>
          </Link>
          <Link>
            <FaHeart></FaHeart>
          </Link>
          <Link>
            <FaShoppingBag></FaShoppingBag>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavSm;

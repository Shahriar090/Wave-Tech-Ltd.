import React from "react";
import { Link } from "react-router-dom";

const Navoptions = () => {
  return (
    <div className="nav-options">
      <ul className="flex flex-col md:flex-row lg:flex-row 2xl:flex-row gap-6 md:text-lg ">
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
          <Link>Special Offer</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navoptions;

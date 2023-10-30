import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import {   IoMdArrowDropdown } from 'react-icons/io';
import { FaCarAlt, FaCartArrowDown, FaFacebook, FaHeart, FaInstagram, FaPhoneAlt, FaSearch, FaTwitter, FaUserAlt } from 'react-icons/fa';
const Navbar = () => {
    return (
        <nav className='w-full h-auto max-w-full'>
            <div className='flex justify-between items-center px-8 py-2 border-b-2 bg-[#1abc9c] text-white'>
                {/* language and currency */}
            <div className='container flex justify-between w-1/3 '>
               <div className='flex gap-4'>
               <div className='language'>
               <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="m-1">Lan<IoMdArrowDropdown className='inline-block'></IoMdArrowDropdown></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#1abc9c] rounded-box w-24">
                    <li><a>English UK</a></li>
                    <li><a>Bengali</a></li>
                </ul>
            </div>
                </div>
                <div className="usd">
                                <div className="dropdown dropdown-hover">
                <label tabIndex={0} className=" m-1">USD<IoMdArrowDropdown className='inline-block'></IoMdArrowDropdown></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#1abc9c] rounded-box w-24">
                    <li><a>$USD</a></li>
                    <li><a>Taka</a></li>
                </ul>
            </div>
                </div>
               </div>
                {/* Orders and return policy */}
                <div className="notice">
                    <h1>Free Returns Standard Orders $99+</h1>
                </div>
                <span className='divider divider-horizontal'></span>
            </div>
            {/* nav items */}
            <div className="list">
                <ul className='flex gap-8'>
                        <li> <Link>My Account</Link></li>
                        <li><Link>Contact Us</Link></li>
                        <li> <Link>Blog</Link></li>
                        <li><Link>Wishlist</Link></li>
                        <li><Link>Cart</Link></li>
                        <li><Link>Login</Link></li>
                    
                </ul>
            </div>
            <span className='divider divider-horizontal'></span>
        {/* social sites */}
            <div className="social">
                <div className="container flex gap-6">
                 <Link><FaFacebook></FaFacebook></Link>
                   <Link> <FaTwitter></FaTwitter></Link>
                    <Link><FaInstagram></FaInstagram></Link>
                </div>
            </div>
            </div>
            

            {/* search bar , logo , cart and hotline number */}

           <div className="container flex justify-between items-center px-16 pt-4 border-b-2 pb-4  max-w-full">
            <div className="search relative">
            <input type="text" placeholder="Search Products" className="input input-bordered border-[#1abc9c] w-full max-w-xs px-8 text-black" />

            <FaSearch className='absolute top-4 left-2  text-[#58cfb7]'></FaSearch>
           
            </div>

            <div className="logo">
                <h1 className='text-3xl font-bold'>Wave Tech Ltd.</h1>
                <p className='font-semibold'>Tech, Trends, Trust – Surf with Wave Tech</p>
            </div>

            <div className="hotline-cart flex justify-center items-center gap-5">
               
                    <div className="contact">
                    <FaPhoneAlt></FaPhoneAlt>
                    <p>Call Us Now</p>
                    +123 5678 999
                    </div>
                    
                    <div className="icons flex gap-5">
                        <Link><FaUserAlt></FaUserAlt></Link>
                       <Link> <FaHeart></FaHeart></Link>
                        <Link><FaCartArrowDown></FaCartArrowDown></Link>
                    </div>
            </div>
           </div>

           {/* mega dropdown for all products and details */}

           <div className="container-mega-dropdown flex justify-center items-center gap-10 py-2 ">
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
           </div>
        </nav>
    );
};

export default Navbar;
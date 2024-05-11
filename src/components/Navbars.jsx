import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const openMenu = () => setNav(!nav);

  // scroll
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // navlink
  const navObj = [
    {
      display: "Home",
      path: "/",
    },

    {
      display: "About Us",
      path: "/about",
    },
    {
      display: "Services",
      path: "/services",
    },
    
    {
      display: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <nav>
      {/* <div className="fixed z-10 w-full h-[120px] flex justify-between md:justify-start md:gap-[15%] lg:gap-[20%] items-center px-2 md:px-[5%] bg-[#fff] text-gray-300 border-b-4 "> */}
      <div className=" playfair flex gap-5  justify-between items-center w-fll h-fit px-[5%] py-[4%] md:py-[2%] bg-[#291d0d] font-thin">
        <Link
          to="/"
          onClick={scrollToTop}
          className="logo flex  items-center gap-2"
        >
           <img
              src={Logo}
              className="w-[50px] rounded-full  "
              alt="Company's Logo"
            />
            <p className="text-[10px] font-bold text-[#f8ab4e] ">
              G L Agbomoagan Legal <br /> Practitioners & Consultants
            </p>
        </Link>

        {/*DESKTOP MENU  */}
        <div>
          <ul className=" hidden md:flex gap-7 text-xs text-gray-300">
            {navObj.map((item, i) => (
              <NavLink
                to={item.path}
                key={i}
                className={(navClass) =>
                  navClass.isActive ? "menuItems" : "menuItem"
                }
                onClick={scrollToTop}
              >
                {item.display}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* HAMBURGER  */}
        <div className="md:hidden cursor-pointer z-10 text-2xl text-[#91652f] px-2 py-1 border-2 border-[#ae834d]  ">
          {!nav ? (
            <FaBars onClick={openMenu} />
          ) : (
            <FaTimes onClick={openMenu} />
          )}
        </div>

        {/* MOBILE MENU  */}
        <ul
          className={
            !nav
              ? "hidden"
              : "  absolute top-0 left-0 w-full h-screen flex flex-col pt-28 pl-5 bg-[#291d0d] text-gray-300 text-xl gap-8"
          }
        >
          {navObj.map((item, i) => (
            <li className="menuItem w-full" onClick={openMenu} key={i}>
              <Link to={item.path} onClick={scrollToTop}>
                {item.display}
              </Link>
            </li>
          ))}

          <div className="flex  contact font-bold text-[#AD895C]">
            <a href="tel:+2347035610109">(234)70-3561-0109</a>
          </div>
        </ul>

        <div className="hidden lg:flex  contact font-bold text-[#AD895C]">
          <a href="tel:+2347035610109">(234)70-3561-0109</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

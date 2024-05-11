import React from "react";
import { Link } from "react-router-dom";
import Logo from "/logo.jpg";

const Navbar = () => {
  return (
    // text-[#AD895C]
    // #66563F
    // bg-[#eae3d9] 
    <div className="flex gap-5  justify-between items-center w-fll h-fit px-[5%] py-[2%]  font-thin">
      {/* <div className="logo font-bold ">G L Agbomoagan Legal Practitioners & Consultants</div> */}
      <a href="" className="logo flex  items-center gap-2">
        {" "}
        <img
          src={Logo}
          className="w-[50px] rounded-full  "
          alt="Company's Logo"
        />
        <p className="text-[15px] font-bold text-[#e2d2be]">G L Agbomoagan Legal Practitioners & Consultants</p>
      </a>
      <ul className="flex gap-7 text-sm">
        <Link to="/"> HOME</Link>
        <Link to="/about"> ABOUT </Link>
        <Link to="/services"> PRACTICE AREAS</Link>
        <Link to="/services"> CONTACT</Link>
      </ul>

      <div className="contact font-bold text-[#AD895C]">
        <a href="tel:+2347035610109">(234)70-3561-0109</a>
      </div>
    </div>
  );
};

export default Navbar;

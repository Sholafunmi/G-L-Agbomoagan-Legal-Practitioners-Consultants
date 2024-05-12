import React from "react";
// import heroImg from "../../assets/law1.avif";
// import Logo from "/logo.jpg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-full w-full ">
      {/* bg-[#291d0d]  */}

      <div className="  heroContent h-[90vh] w-full flex flex-col justify-center ">
        <div className="herobody1 ml-[5%] flex flex-col gap-4 playfair ">
          <p className="w-fit font-bold text-4xl lg:text-6xl text-gray-50 ">
            {" "}
            <span className="text-[#f8ab4e]">G L Agbomoagan</span> <br /> Legal
            Practitioners & Consultants
          </p>

          <p className="text-gray-50 text-2xl">
            Best Attorneys At Your Services
          </p>

          <Link className="bg-[#f8ab4e]  w-fit py-2 px-4 text-gray-50 font-bold ">
            Book you appointment now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

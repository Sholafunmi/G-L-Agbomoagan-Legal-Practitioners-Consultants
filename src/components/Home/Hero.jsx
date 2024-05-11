import React from "react";
// import heroImg from "../../assets/law1.avif";
import Logo from "/logo.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-full w-full">
      {/* bg-[#291d0d]  */}

      <div className="heroContent h-[90vh] w-full flex flex-col justify-center">
        <div className="herobody1 ml-[5%] flex flex-col gap-4 playfair i">
          <p className="w-fit font-bold text-4xl lg:text-6xl text-gray-50 ">
            {" "}
            <span className="text-[#f8ab4e]">
              {" "}
              {/* <span className=" px-2 border border-dotted border-y-4 border-[#291d0d]"> */}
                G L Agbomoagan
              {/* </span>{" "} */}
               {" "}
            </span>{" "}
            <br /> Legal Practitioners & Consultants
            {/* hid */}
          </p>
          <p className="text-gray-50 text-2xl">
            Professional Lawyers At Your Services
          </p>

          <Link className="bg-[#f8ab4e]  w-fit py-2 px-4 text-gray-50 ">
            Book you appointment now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

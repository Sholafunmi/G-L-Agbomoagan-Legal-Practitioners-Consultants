import React from "react";
import logo from "/logo.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GoHorizontalRule } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Contact from "../pages/Contact";

import { Link as scroll } from "react-scroll";

const Footer = () => {
  //  scroll behavior
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    // xs={12} md={5} lg={4}
    <div className=" footerBack w-full min-h-[70vh] flex flex-col justify-center items-center playfair  bg-[#38250f] ">
      <div className="footerContent w-full justify-between px-[1%]  md:px-[5%] py-[6%] pt-40 flex flex-col md:flex-row 
      bg-[#291d0d] text-gray-50 gap-5 md:gap-0 md:rounded-tl-[50%] rounded-tr-[50%] ">
        <Container className="">
          <Row className="gap-2">
            <a className="logo " href="/" target="_blank">
              <img
                src={logo}
                className="w-[100px] md:w-[150px]"
                alt="Vite logo"
              />
            </a>

            <p className="text-md md:text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet corrupti temporibus? Molestias accusamus quisquam, aliquid excepturi autem Modi!
              <strong> G L Agbomoagan Legal Practitioners & Consultants</strong>
            </p>

            
          </Row>
        </Container>

        {/* useful links  */}
        <Container className="  ">
          <Row className="gap-2">
            <h3 className="text-[20px] text-[#f8ab4e]">Quick Links</h3>

            <ul className=" flex flex-col gap-2 text-[#f8ab4e] ">
              <li className="flex  items-center gap-2 text-[25px] md:text-[30px]">
                <GoHorizontalRule />{" "}
                <Link
                  className="no-underline text-gray-50 text-lg"
                  to="/"
                  onClick={scrollToTop}
                >
                  Home
                </Link>
              </li>

              <li className="flex items-center gap-2 text-[25px] md:text-[30px]">
                <GoHorizontalRule />{" "}
                <Link
                  className="no-underline text-gray-50 text-lg"
                  to="/about"
                  onClick={scrollToTop}
                >
                  About Us
                </Link>
              </li>

              <li className="flex items-center gap-2 text-[25px] md:text-[30px]">
                <GoHorizontalRule />{" "}
                <Link
                  className="no-underline text-gray-50 text-lg"
                  to="/practice_Areas"
                  onClick={scrollToTop}
                >
                 Practice Areas
                </Link>
              </li>

              <li className="flex items-center gap-2 text-[25px] md:text-[30px]">
                <GoHorizontalRule />{" "}
                <Link
                  className="no-underline text-gray-50 text-lg"
                  to="/appointment"
                  onClick={scrollToTop}
                >
                  Book An Appointment
                </Link>
              </li>

           
            </ul>

         
          </Row>
        </Container>
        {/* third container  */}
        <Container className="  ">
          <Row className="flex gap-2">
            <h3 className="text-[20px] text-[#f8ab4e]"> Contact Us</h3>

            <div className="call text-[#f8ab4e] flex gap-2 items-center text-[17px]  ">
              <BsFillTelephoneOutboundFill className=" " />
              <a
                href="tel:+(444)01772305248"
                className=" text-gray-50 no-underline"
              >
                (444)01772305248
              </a>
            </div>
            <div className="call text-[#f8ab4e] flex gap-2 items-center text-[17px]">
              <BsFillTelephoneOutboundFill className=" " />
              <a
                href="tel:+(444)07980090172"
                className=" text-gray-50 no-underline"
              >
                (444)07980090172
              </a>
            </div>
           
            <div className="mail text-[#f8ab4e] flex text-xl gap-2 items-center text-[17px]">
              <BsEnvelope className=" text-[#f8ab4e]" />
              <a
                href="mailto:info@xxxxx.com"
                className=" text-gray-50 no-underline"
              >
                info@xxxxx.com
              </a>
            </div>
            <div className="location flex text-xl gap-2 items-center text-[17px]">
              <BsGeoAlt className="text-[#f8ab4e]" />
              <a href="http://" className="text-gray-50 no-underline">
                Slaters Close Broughton Preston Lancashire <br /> Pr3 5df
              </a>
            </div>
          </Row>
        </Container>


       
      
        {/* socials container  */}
        <Container className=" flex ">
          <div className="socials flex md:flex-col gap-5 md:gap-8 text-2xl md:text-3xl ">
          <a href="" className=" text-white hover:text-green-400">
            <MdWhatsapp />{" "}
          </a>

          <a href="" className=" text-white hover:text-green-400">
            <MdFacebook />{" "}
          </a>

          <a href="" className=" text-white hover:text-green-400">
            <FaInstagram />{" "}
          </a>

          <a href="" className=" text-white hover:text-green-400">
            <MdFacebook />{" "}
          </a>

          <a href="" className=" text-white hover:text-green-400">
            <FaInstagram />{" "}
          </a>

            
          </div>
        </Container>
      </div>


    
      <div className="foot w-full h-fit flex flex-col justify-center items-center py-2 bg-[#291d0d]  text-gray-50 gap-2">
        
        <div className="copyright">
          <p>Copyright © 2024. All rights reserved.</p>
        </div>
        <div className="developer">
          <p>
            Website Developed by{" "}
            <a
              className="no-underline text-[#f8ab4e]"
              href="https://www.instagram.com/vibrant_consultancy_enterprise?igsh=MWs3Z2w4OGRka2YzZw%3D%3D&utm_source=qr"
              target="_blank"
            >
              {" "}
              VSCTE
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

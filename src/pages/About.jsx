import React from "react";
import { motion } from "framer-motion";
import Navbars from "../components/Navbars";

const About = () => {
  return (
    <>
      <Navbars />
      <div className=" w-full h-fit flex flex-col ">
        <div className="container aboutImg h-[25vh] md:h-[40vh] mx-auto  flex flex-col justify-center items-center text-[#f8ab4e]">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            About Us
          </motion.h2>
          {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-gray-50"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </motion.p> */}
        </div>

        <div className="aboutContent px-[5%] pb-10">
          <h2 className="text-3xl font-bold mb-8 border-b-4 border-[#f8ab4e] w-fit mt-10">
            Company Overview
          </h2>
          <p className="mb-14">
            Established in Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Fugiat tenetur esse dolor. Fugit, voluptatibus, vero
            aspernatur non molestiae ullam, officia facilis accusantium magni
            veritatis tempora quam tenetur iusto impedit assumenda dolor
            officiis vel enim cumque delectus reprehenderit necessitatibus
            asperiores. Reiciendis!
          </p>

          {/* core values, partners and distribution channel  */}
          <div className="values2 flex w-full h-fit gap-5">
            <div className="values2Text w-[70%]  flex flex-col gap-10">
              <div className="val">
                <h3 className="text-[#f8ab4e] font-bold">Core Values</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                molestias fugit nam fugiat deleniti ratione, vel eius
                praesentium, suscipit aut officia ut rem dolor distinctio. Ut
                asperiores pariatur, quidem reiciendis placeat voluptates
                reprehenderit sed consequatur recusandae voluptas cumque?
                Tempora, illum!
              </p>
              </div>

              <div className="partners ">
                <h3 className="text-[#f8ab4e] font-bold">Partners</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                molestias fugit nam fugiat deleniti ratione, vel eius
                praesentium, suscipit aut officia ut rem dolor distinctio. Ut
                asperiores pariatur, quidem reiciendis placeat voluptates
                reprehenderit sed consequatur recusandae voluptas cumque?
                Tempora, illum!
              </p>
              </div>

              <div className="channel ">
                <h3 className="text-[#f8ab4e] font-bold">Distribution Channel</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                molestias fugit nam fugiat deleniti ratione, vel eius
                praesentium, suscipit aut officia ut rem dolor distinctio. Ut
                asperiores pariatur, quidem reiciendis placeat voluptates
                reprehenderit sed consequatur recusandae voluptas cumque?
                Tempora, illum!
              </p>
              </div>
              
            </div>
            <div className="values2img w-[30%] border border-red-500">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

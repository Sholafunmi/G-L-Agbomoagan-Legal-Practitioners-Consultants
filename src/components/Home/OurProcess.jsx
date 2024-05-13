import React from "react";
import { Link } from "react-router-dom";
import missionImg from "../../assets/law5.avif";
import visionionImg from "../../assets/law3.avif";
import valuesImg from "../../assets/law4.avif";

const OurProcess = () => {
  return (
    <div className="w-full min-h-screen px-[5%] py-12  playfair">
      <h2 className="text-3xl font-bold mb-8 border-b-4 border-[#f8ab4e] w-fit">
        Our Process
      </h2>
      <div className="container md:w-[80%] h-fit mx-auto text-center pb-10 grid gap-10">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 "> */}
        <div className="mission text-left  h-fit w-full items-center  flex flex-col-reverse md:flex-row-reverse gap-10">
          <div className="missionText md:w-[50%]">
            <h3 className="text-[#f8ab4e] font-bold text-[28px]">Mission</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              facilis minima et enim debitis maiores quasi illum quidem
              aspernatur minus voluptas asperiores provident nemo, facere magnam
              voluptatibus distinctio harum quia?
            </p>
          </div>
          <div className="missionImg md:w-[50%]">
            <img className=" " src={missionImg} alt="" />
          </div>
        </div>

        <div className="vision text-left h-fit w-full items-center flex flex-col-reverse md:flex-row gap-10 ">
          <div className="visionText md:w-[50%]">
            <h3 className="text-[#f8ab4e] font-bold text-[28px]">Vision</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              facilis minima et enim debitis maiores quasi illum quidem
              aspernatur minus voluptas asperiores provident nemo, facere magnam
              voluptatibus distinctio harum quia?
            </p>
          </div>
          <div className="visionImg md:w-[50%] ">
            <img src={visionionImg} alt="" />
          </div>
        </div>

        <div className="values text-left  h-fit w-full items-center  flex flex-col-reverse md:flex-row-reverse gap-10">
          <div className="valuesText md:w-[50%]">
            <h3 className="text-[#f8ab4e] font-bold text-[28px]">Our Values</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              facilis minima et enim debitis maiores quasi illum quidem
              aspernatur minus voluptas asperiores provident nemo, facere magnam
              voluptatibus distinctio harum quia?
            </p>
          </div>
          <div className="valuesImg md:w-[50%]">
            <img src={valuesImg} alt="" />
          </div>
        </div>

        {/* </div> */}

        {/* <p className="pb-10 text-left">
            At G L Agbomoagan Legal Practitioners & Consultants Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Alias ea sint quaerat
            quasi quisquam reprehenderit minus inventore debitis tempore
            dolorum.
          </p> */}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 "></div>
      </div>

      {/* <Link className="bg-[#f8ab4e]  w-fit py-2 px-4 text-gray-50 font-bold ">
          {" "}
          Click To See More
        </Link> */}
    </div>
  );
};

export default OurProcess;

import React from "react";
// import Navbar from "../components/Navbar";
// import Navbars from "../Navbars";
// import imgPA1 from "../../assets/law1.avif";

import contractLaw from "../../assets/contractLaw.jpg";
import familyLaw from "../../assets/familyLaw1.webp";
import familyLaw2 from "../../assets/familyLaw2.webp";

import { Link } from "react-router-dom";

const Practice_Areas = () => {
  const practiceAreas = [
    {
      title: "Personal Injury",
      image: contractLaw,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      path: "/about",
    },
    {
      title: "Family Law",
      image: familyLaw,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      path: "/contact",
    },
    {
      title: "Corporate Law",
      image: familyLaw2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      path: "/about",
    },

    {
      title: "Corporate Law",
      image: familyLaw2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      path: "/about",
    },
    // Add more practice areas as needed
    {
      title: "Personal Injury",
      image: contractLaw,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      path: "/about",
    },
    {
      title: "Family Law",
      image: familyLaw,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      path: "/contact",
    },
    {
      title: "Corporate Law",
      image: familyLaw2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      path: "/about",
    },

    {
      title: "Corporate Law",
      image: familyLaw2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      path: "/about",
    },
  ];

  return (
    <>
      {/* <Navbars /> */}
      <div className="w-full min-h-screen px-[5%] py-12  playfair">
        <div className="container mx-auto text-center pb-10">
          <h2 className="text-3xl font-bold mb-8 border-b-4 border-[#f8ab4e] w-fit">Practice Areas</h2>
          <p className="pb-10 text-left">
            At G L Agbomoagan Legal Practitioners & Consultants Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Alias ea sint quaerat
            quasi quisquam reprehenderit minus inventore debitis tempore
            dolorum.
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 "> */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
            {practiceAreas.map((area, index) => (
              <Link key={index} to={area.path}>
                <div
                  key={index}
                  className="bg-orange-50 rounded-lg shadow-lg p-6"
                >
                  <img src={area.image} alt="" />
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>

                  <p className="text-gray-700">{area.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Link className="bg-[#f8ab4e]  w-fit py-2 px-4 text-gray-50 font-bold ">
          {" "}
          Click To See More
        </Link>
      </div>
    </>
  );
};

export default Practice_Areas;

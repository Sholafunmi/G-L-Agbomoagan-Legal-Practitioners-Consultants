import React from "react";
import gm from "../../assets/lawyer2.webp";
import Agm from "../../assets/lawyer2.webp";
import m from "../../assets/lawyer3.webp";
import n from "../../assets/lawyer4.webp";

const Team = () => {
  const Team = [
    {
      image: gm,
      name: "Lugard Agbomoagan",
      role: "General Manager",
    },
    {
      image: Agm,
      name: "Lagbaja Tamedo",
      role: "General Manager",
    },
    {
      image: m,
      name: "Lagbaja Tamedo",
      role: "General Manager",
    },
    // next role
    {
      image: n,
      name: "Lagbaja Tamedo",
      role: "General Manager",
    },
    {
      image: gm,
      name: "Lagbaja Tamedo",
      role: "General Manager",
    },
    {
      image: gm,
      name: "Lagbaja Tamedo",
      role: "General Manager",
    },
  ];

  return (
    <div className="w-full min-h-screen px-[5%]  py-12 bg-[#291d0d]  playfair">
      <h2 className="text-3xl font-bold mb-8 border-b-4 text-[#f8ab4e] border-gray-200 w-fit">
        Management Team
      </h2>
      <div className="container mx-auto md:w-[80%] gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Team.map((area, index) => (
            <div key={index} className="mx-auto  bg-[#ece9e4] text-[#291d0d] rounded-lg shadow-lg p-6">
              <img src={area.image} clas alt="GM image" />
              <h3 className="font-bold">{area.name}</h3>
              <p>{area.role}</p>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default Team;

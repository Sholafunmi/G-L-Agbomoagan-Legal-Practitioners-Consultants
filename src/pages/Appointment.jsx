import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Navbars from "./../components/Navbars";
import { Link } from "react-router-dom";

const BookSession = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      {" "}
      <Navbars />
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book a Session</h2>
          <div className="max-w-md mx-auto">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              className="block w-full bg-white border border-gray-300 rounded-md py-2 px-4 mb-3"
            />
            <input
              type="text"
              placeholder="Your Name"
              className="block w-full bg-white border border-gray-300 rounded-md py-2 px-4 mb-3"
            />
            {/* Add more input fields for additional information */}
           

            <Link className="bg-[#f8ab4e]  w-fit py-2 px-4 text-gray-50 font-bold ">
            Book Now
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSession;

// import React from "react";
// import Navbars from '../components/Navbars'

// const About = () => {
//   return (
//     <div>
//       <Navbars />

//       This is ABout page
//     </div>
//   );
// };

// export default About;






import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-12">
      <div className="container mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          About Us
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-gray-700"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </motion.p>
      </div>
    </div>
  );
}

export default About;

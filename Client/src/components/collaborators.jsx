import React from "react";
import { motion } from "framer-motion";

const Collaborators = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold pl-16 pt-10 font-mono hover:text-red-300 transition-colors duration-300 ease-in-out">
        Our Collaborators
      </h1>

      <motion.div
        className="flex justify-center items-center h-[50vh] px-10"
        initial={{ opacity: 0, position: "relative", top: "-100px" }}
        whileInView={{ opacity: 1, position: "relative", top: "0px" }}
        transition={{ duration: 1 }}
      >
        <div className="m-2 p-4 bg-white text-black shadow-md flex items-center justify-center w-[200px] h-[200px] hover:bg-red-50 rounded-sm ">
          <p className="text-center">NCC</p>
        </div>
        <div className="m-2 p-4 bg-white text-black shadow-md flex items-center justify-center w-[200px] h-[200px] hover:bg-red-50 rounded-sm">
          <p className="text-center">NSS</p>
        </div>
        <div class="m-2 p-4 bg-white text-black shadow-md flex items-center justify-center w-[200px] h-[200px] hover:bg-red-50 rounded-sm">
          <p class="text-center">YMCA</p>
        </div>
      </motion.div>

      <div>
        <h1 className="text-7xl font-bold flex justify-center items-center  ">
          ...
        </h1>
      </div>
    </div>
  );
};

export default Collaborators;
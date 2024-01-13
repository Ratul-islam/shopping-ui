"use client";

import { useState } from "react";
import { FaSort } from "react-icons/fa";
import { IoFilterCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const EditSearch = () => {
  const [active, setActive] = useState(true);
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const variants = {
    open: { scaleY: 1,
            opacity: 1 },
    closed: { scaleY: 0,  },
  }
  return (
    <>
      <div
        className="flex-1 border-r-[1px] border-gray-400 flex items-center justify-center cursor-pointer relative"
        onClick={() => setActive(!active)}
      >
        <span>Sort by</span>
        <FaSort />
        <motion.div
          variants={variants}
          animate={active? "closed":"open" }
          className={`container transition-all absolute origin-top top-7 bg-pink-500 p-2 text-xs w-60 left-0 opacity-0`}
        >
          <div
            className="item p-1 hover:bg-pink-700 text-center"
            value={"priceLow"}
          >
            Low to High price
          </div>
          <div
            className="item p-1 hover:bg-pink-700 text-center"
            value={"priceHigh"}
          >
            High to Low price
          </div>
          <div
            className="item p-1 hover:bg-pink-700 text-center"
            value={"rating"}
          >
            Rating
          </div>
          <div
            className="item p-1 hover:bg-pink-700 text-center"
            value={"purchase"}
          >
            Purchase
          </div>
        </motion.div>
      </div>
      <div className="flex-1 flex  items-center justify-center cursor-pointer">
        <span>Filter</span>
        <IoFilterCircleOutline />
      </div>
    </>
  );
};

export default EditSearch;

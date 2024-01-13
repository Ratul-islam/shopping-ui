"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({ details }) => {
  const { link } = details;
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      className="p-2 cursor-pointer hover:bg-slate-200 transition group"
    >
      <div className="max-w-full aspect-square transition rounded-xl p-4 bg-gray-200 grid content-center group-hover:bg-white relative">
        <Image
          src={details.link}
          alt="product images"
          width={100}
          height={100}
        />
      </div>
      <div className="text-center text-xs pt-2">
        <p>{details.name}</p>
        <div className=" font-bold">${details?.price}</div>
      </div>
    </motion.div>
  );
};

export default Card;

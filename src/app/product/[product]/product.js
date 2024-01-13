import Nav from "./nav";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./button";
const SingleProduct = ({
  img,
  name,
  id,
  description,
  price,
  quantity,
  category,
  color,
}) => {
  return (
    <div className="w-full bg-white bottom-0 rounded-lg px-2 py-4 ">
      <Nav />
      <motion.div
        initial="height"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          visible: { maxHeight: "454px", opacity: 1 },
          height: { maxHeight: "10px", opacity: 0, overflowY: "scroll" },
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        }}
        className="no-scrollbar"
      >
        <div className="flex justify-center items-center bg-slate-200 rounded-xl p-3 mt-3 mb-6">
          <Image height={100} width={100} src={img} />
        </div>
        <div className="px-4">
          <div className="py-3 border-b-2">{name}</div>
          <div className="flex items-center justify-between py-2 border-b-2">
            <div className="my-1 text-sm">price: ${price}</div>
            <div className="text-xs">999+ sold</div>
          </div>
          <div className="flex text-xs justify-between py-3 border-b-2">
            <div>{category}</div>
            <div className="flex items-center">
              <div className="mx-1">color:</div>
              <div
                style={{ backgroundColor: color }}
                className="w-3 h-3 border-solid border-2 border-sky-500 rounded-full"
              ></div>
            </div>
          </div>
          <div className="my-1 text-xs">
            <div className="text-sm">Description:</div>
            {description}</div>
        </div>
      </motion.div>
      <Button />
    </div>
  );
};

export default SingleProduct;

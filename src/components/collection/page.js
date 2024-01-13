'use client'
import Link from "next/link";
import Card from "./card/page";
import EditSearch from "./editSearch";
import {motion} from 'framer-motion'

const Collection = () => {
  const dummyData = [
    {
      id: 1,
      name: "Backpack A",
      price: 49.99,
      quantity: 1,
      category: "Backpacks",
      color: "Black",
      description:
        "A versatile and durable backpack with multiple compartments for organized storage.",
      link: "https://i.postimg.cc/sDJ9tk4X/Object.png",
    },
    {
      id: 2,
      name: "Backpack B",
      price: 39.99,
      quantity: 2,
      category: "Backpacks",
      color: "Blue",
      description:
        "A stylish backpack with padded straps and a laptop compartment for everyday use.",
      link: "https://i.postimg.cc/sDJ9tk4X/Object.png",
    },
    {
      id: 3,
      name: "Backpack C",
      price: 59.99,
      quantity: 1,
      category: "Backpacks",
      color: "Green",
      description:
        "A rugged outdoor backpack with waterproof material, perfect for hiking and camping.",
      link: "https://i.postimg.cc/sDJ9tk4X/Object.png",
    },
    {
      id: 4,
      name: "Backpack D",
      price: 34.99,
      quantity: 3,
      category: "Backpacks",
      color: "Red",
      description:
        "A lightweight and compact backpack for on-the-go adventures.",
      link: "https://i.postimg.cc/sDJ9tk4X/Object.png",
    },
    {
      id: 5,
      name: "Backpack E",
      price: 44.99,
      quantity: 2,
      category: "Backpacks",
      color: "Gray",
      description:
        "A modern and sleek backpack with a USB charging port for tech-savvy users.",
      link: "https://i.postimg.cc/sDJ9tk4X/Object.png",
    },
    {
      id: 6,
      name: "Backpack F",
      price: 54.99,
      quantity: 1,
      category: "Backpacks",
      color: "Purple",
      description:
        "An elegant backpack with a leather finish, suitable for business and casual occasions.",
      link: "https://i.postimg.cc/sDJ9tk4X/Object.png",
    },
  ];

  return (
    <div
    className="w-full bg-white bottom-0 rounded-lg px-2 py-4 max-h-[450px]">
      <div className="flex">
        <EditSearch />
      </div>
      <motion.div
       initial="height"
       whileInView="visible"
       viewport={{ once: true }}
       transition={{ duration: .5, }}
       variants={{
         visible: { maxHeight: "384px" , opacity: 1},
         height: { maxHeight: "10px", opacity: 0,overflowY: 'scroll'},
         transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2
        }
       }}
      className="grid grid-cols-2  no-scrollbar">
        {dummyData.map((bag) => {
          return (
            <Link href={`product/${bag.id}`} key={bag.id}>
              <Card details={bag} />
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Collection;

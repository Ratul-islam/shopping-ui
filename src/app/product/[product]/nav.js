'use client'
import {useRouter} from 'next/navigation'
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Nav = () => {
    const router = useRouter()
  return (
    <div className="flex justify-between items-center px-2">
      <div >
      <IoChevronBackCircleOutline
        size={20}
        className="text-gray-400 cursor-pointer"
        onClick={()=> {router.back()}}
      />
      </div>
      
    </div>
  );
};

export default Nav;

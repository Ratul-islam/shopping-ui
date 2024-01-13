import Link from 'next/link'
import { IoIosSearch } from "react-icons/io";
import { LiaLuggageCartSolid } from "react-icons/lia";
import Menu from './menu';

const Navbar = () => {
  return (
    <nav className=' flex justify-between w-full bg mb-2'>
      <Menu/>
        <ul className='flex w-16 justify-between'>
            <li>
            <Link href="/cart">
                <LiaLuggageCartSolid size={20} className="opacity-70 text-white"/>
            </Link>
            </li>
            <li>
                <input type="search" className='w-0 hidden'/>
                <IoIosSearch size={20} className="opacity-70 text-white cursor-pointer"/>
            </li>
            
        </ul>
    </nav>
  )
}

export default Navbar
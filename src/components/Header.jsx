import { NavLink } from 'react-router-dom';
import img from '../assets/bnb.webp';
import { HiBars3CenterLeft, HiOutlineArrowRightOnRectangle, HiOutlineMoon, HiOutlineUser } from "react-icons/hi2";
const Header = () => {
  return (
    <header className='col-span-full row-start-1 row-end-1 flex md:justify-end p-3 bg-white shadow-2xl'>
       <ul className="hidden md:flex items-center ">
        <li className="px-3 py-2 hover:bg-blue-500 hover:text-white">
          <NavLink to=''  className=" flex items-center gap-2">
            <HiOutlineUser className="text-[#5B53E7] text-xl" />
          </NavLink>
        </li>
        <li className="px-3 py-2 hover:bg-blue-500 hover:text-white">
          <button className=" flex items-center gap-2">
            <HiOutlineMoon className="text-[#5B53E7] text-xl"  />
          </button>
        </li>
        <li className="px-3 py-2 hover:bg-blue-500 hover:text-white">
          <NavLink className=" flex items-center gap-2">
            <HiOutlineArrowRightOnRectangle className="text-[#5B53E7] text-xl" />
          </NavLink>
        </li>
        </ul>
      <HiBars3CenterLeft className='text-2xl md:hidden' />
      {/* <img src={img} alt=""  className='w-6' /> */}
    </header>
  )
}

export default Header
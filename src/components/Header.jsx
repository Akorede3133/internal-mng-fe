import { NavLink } from 'react-router-dom';
import { HiBars3CenterLeft, HiOutlineArrowRightOnRectangle, HiOutlineMoon, HiOutlineUser } from "react-icons/hi2";
import { useLogout } from '../hooks/useLogout';
import { useDarkModeContext } from '../context/darkModeContext';
const Header = () => {
  const { logoutUser, isLogingOut }  = useLogout();
  const { toggleDarkMode, isDarkMode } = useDarkModeContext();
  console.log(isDarkMode);
  return (
    <header className='col-span-full row-start-1 row-end-1 flex md:justify-end p-3 bg-white shadow-2xl'>
       <ul className="hidden md:flex items-center ">
        <li className="px-2 py-2 hover:bg-[#E5E7EB] rounded-md cursor-pointer">
          <NavLink to='/account'  className=" flex items-center gap-2">
            <HiOutlineUser className="text-[#5B53E7] text-xl" />
          </NavLink>
        </li>
        <li className="px-2 py-2 hover:bg-[#E5E7EB] rounded-md cursor-pointer">
          <button className=" flex items-center gap-2" onClick={toggleDarkMode}>
            <HiOutlineMoon className="text-[#5B53E7] text-xl"  />
          </button>
        </li>
        <li className="px-2 py-2 hover:bg-[#E5E7EB] rounded-md cursor-pointer" onClick={logoutUser}>
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
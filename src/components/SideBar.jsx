import { NavLink } from "react-router-dom"
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineArrowRightOnRectangle, HiHome, HiOutlineCalendarDays, HiHomeModern,  HiOutlineUsers, HiOutlineCog6Tooth, HiOutlineMoon } from "react-icons/hi2";
import logo from '../assets/logo-light.png'


const SideBar = () => {
  return (
    <nav className=" hidden md:block absolute top-0 w-[15rem] md:w-auto h-screen md:static md:col-start-1 row-span-full bg-white shadow-sm p-10">
          <img src={logo} alt=""  className="w-[170px] px-4 mb-5"/>

      <ul className=" space-y-3 ">
        <li className="px-3 py-2">
        </li>
        <li className="px-3 py-2 hover:bg-blue-500 hover:text-white md:hidden">
          <NavLink to=''  className=" flex items-center gap-2">
            <HiOutlineUser className="text-[#5B53E7] text-xl" />
            <span>Profile</span>
          </NavLink>
        </li>
        <li className="px-3 py-2 hover:bg-blue-500 hover:text-white md:hidden">
          <button className=" flex items-center gap-2">
          <HiOutlineMoon className="text-[#5B53E7] text-xl"  />

            <span>Dark mode</span>
          </button>
        </li>
        <li className="px-3 py-2 hover:bg-blue-500 hover:text-white md:hidden">
          <NavLink className=" flex items-center gap-2">
            <HiOutlineArrowRightOnRectangle className="text-[#5B53E7] text-xl" />
            <span>Logout</span>
          </NavLink>
        </li>
        <li className="px-3 py-2 hover:bg-blue-500 hover:text-white">
          <NavLink to='dashboard' className=" flex items-center gap-2">
            <HiHome className="text-[#9CA3AF] text-xl"  />
            <span>Home</span>
          </NavLink>
        </li>
        <li className="px-3 py-2 hover:bg-blue-500 hover:text-white">
          <NavLink to='bookings' className=" flex items-center gap-2">
            <HiOutlineCalendarDays className="text-[#9CA3AF] text-xl"  />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li className="px-3 py-2 hover:bg-blue-500 hover:text-white">
          <NavLink to='cabins' className=" flex items-center gap-2">
            <HiHomeModern className="text-[#9CA3AF] text-xl"  />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li className="px-3 py-2 hover:bg-blue-500 hover:text-white">
          <NavLink to='users' className=" flex items-center gap-2">
            <HiOutlineUsers className="text-[#9CA3AF] text-xl"  />
            <span>Users</span>
          </NavLink>
        </li>
        <li className="px-3 py-2 hover:bg-blue-500 hover:text-white">
          <NavLink to='settings' className=" flex items-center gap-2">
            <HiOutlineCog6Tooth className="text-[#9CA3AF] text-xl"  />
            <span className=" text-[#4B5563] font-semibold">Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default SideBar
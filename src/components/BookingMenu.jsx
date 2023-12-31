import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye, HiTrash } from "react-icons/hi2"

const BookingMenu = ({ status }) => {
  return (
    <ul className="bg-white absolute w-[200px] space-y-4 right-[2%]  z-10 p-4 top-[60%] rounded-md shadow-[0_0_5px_rgba(0,0,0,0.2),-0_-0_5px_rgba(0,0,0,0.2)]">
        <li className="flex gap-4 whitespace-nowrap items-center text-gray-500">
          <HiEye />
          <span>See details</span>
        </li>
        { status === 'unconfirmed' && <li className="flex gap-4 whitespace-nowrap items-center text-gray-500">
          <HiArrowDownOnSquare />
          <span>Check in</span>
        </li> }
        { status === 'checked-in' && <li className="flex gap-4 whitespace-nowrap items-center text-gray-500">
          <HiArrowUpOnSquare />
          <span>Check out</span>
        </li> }
        <li className="flex gap-4 whitespace-nowrap items-center text-gray-500">
          <HiTrash />
          <span>Delete booking</span>
        </li>
  </ul>
)
}

export default BookingMenu
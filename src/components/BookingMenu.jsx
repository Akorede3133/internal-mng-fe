import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye, HiTrash } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"
import { useCheckout } from '../hooks/useCheckout';
import { useDeleteBooking } from "../hooks/useDeleteBooking";
import Modal from './Modal';
import DeleteWindow from "./DeleteWindow";

const BookingMenu = ({ status, id, setShowMenu }) => {
  const navigate = useNavigate();
  const { checkoutBooking, isCheckingout } = useCheckout();
  const { isDeleting, deleteBookingApi} = useDeleteBooking();

  const data = {
    booking: {
      status: 'checked-out'
    }
  }
  return (
    <ul className="bg-white  absolute w-[200px] right-[2%]  z-[100] top-[60%] rounded-md shadow-[0_0_5px_rgba(0,0,0,0.2),-0_-0_5px_rgba(0,0,0,0.2)]">
        <li className="flex gap-4 hover:bg-slate-200 py-2 px-4 whitespace-nowrap items-center text-gray-500 cursor-pointer" onClick={() => navigate(`/booking/${id}`)}>
          <HiEye />
          <span>See details</span>
        </li>
        { status === 'unconfirmed' && <li className="flex gap-4 whitespace-nowrap items-center text-gray-500 cursor-pointer hover:bg-slate-200 py-2 px-4" onClick={() => navigate(`/checkin/${id}`)}>
          <HiArrowDownOnSquare />
          <span>Check in</span>
        </li> }
        { status === 'checked-in' && <li className="flex gap-4 whitespace-nowrap items-center text-gray-500 cursor-pointer hover:bg-slate-200 py-2 px-4 " onClick={() => checkoutBooking({id, data})} disabled={isCheckingout}>
          <HiArrowUpOnSquare />
          <span>Check out</span>
        </li> }
        <li className="flex gap-4 whitespace-nowrap items-center text-gray-500 cursor-pointer hover:bg-slate-200 py-2 px-4 " onClick={() => deleteBookingApi(id)}>
          <HiTrash />
          <span>Delete booking</span>
        </li>
      </ul>
  )
}

export default BookingMenu
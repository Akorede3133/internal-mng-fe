import { Link, useNavigate } from "react-router-dom"
import { useCheckout } from '../hooks/useCheckout';
import Modal from './Modal';
import DeleteWindow from "./DeleteWindow";
import { useDeleteBooking } from "../hooks/useDeleteBooking";
const BookingDetailsButtons = ({ status, id }) => {
  const navigate = useNavigate();
  const { checkoutBooking, isCheckingout } = useCheckout();
  const { isDeleting, deleteBookingApi} = useDeleteBooking();
  const data = {
    booking: {
      status: 'checked-out'
    }
  }
  return (
    <div className="flex justify-end gap-3 items-center">
    {status === 'unconfirmed' &&
      <button className=" bg-blue-600 hover:bg-blue-800 py-3 rounded-md px-5 text-white" onClick={() => navigate(`/checkin/${id}`)}>Check in</button> 
    }
      {status === 'checked-in' &&
        <button className=" bg-blue-600 hover:bg-blue-800 py-3 rounded-md px-5 text-white" onClick={() => checkoutBooking({id, data})} disabled={isCheckingout}>Check out</button> 
      }
      <Modal>
        <Modal.Open>
        <button className=" bg-red-700 hover:bg-red-900 py-3 rounded-md px-5 text-white">Delete booking</button>
        </Modal.Open>
        <Modal.Window>
          <DeleteWindow resourceName='booking' onConfirm={() => deleteBookingApi(id)} disabled={isDeleting}  />
        </Modal.Window>
      </Modal>
      <Link to={-1} className="py-3 rounded-md px-5 bg-white text-gray-600 border border-gray-400">Back</Link>
    </div>
  )
}

export default BookingDetailsButtons
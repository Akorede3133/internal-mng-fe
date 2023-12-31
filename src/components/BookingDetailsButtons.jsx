import { Link, useNavigate } from "react-router-dom"

const BookingDetailsButtons = ({ status, id }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end gap-3 items-center">
    {status === 'unconfirmed' &&
      <button className=" bg-blue-600 hover:bg-blue-800 py-3 rounded-md px-5 text-white" onClick={() => navigate(`/checkin/${id}`)}>Check in</button> 
    }
      {status === 'checked-in' &&
        <button className=" bg-blue-600 hover:bg-blue-800 py-3 rounded-md px-5 text-white">Check out</button> 
      }
      <button className=" bg-red-700 hover:bg-red-900 py-3 rounded-md px-5 text-white">Delete booking</button>
      <Link to={-1} className="py-3 rounded-md px-5 bg-white text-gray-600 border border-gray-400">Back</Link>
    </div>
  )
}

export default BookingDetailsButtons
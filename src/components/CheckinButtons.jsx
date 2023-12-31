import { Link } from "react-router-dom"

const CheckinButtons = () => {
  return (
    <div className="flex justify-end gap-3 items-center mb-12">
      <button className=" bg-blue-600 hover:bg-blue-800 py-3 rounded-md px-5 text-white">Check in Booking #582</button>
      <Link to={-1} className="py-3 rounded-md px-5 bg-white text-gray-600 border border-gray-400">Back</Link>
  </div>
  )
}

export default CheckinButtons
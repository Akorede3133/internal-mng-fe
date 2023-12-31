import { Link } from "react-router-dom"
import StatusTag from "./StatusTag"
import BookingDetailsBox from "./BookingDetailsBox"

const BookingDetails = () => {
  return (
    <section>
      <article className="flex justify-between items-center">
        <section className="flex items-center gap-4">
          <h2 className="text-3xl">Booking #582</h2>
          <StatusTag status='unconfirmed' />
        </section>
        <Link className=" text-xl text-blue-600 font-semibold" to={-1}>
          &larr; Back
        </Link>
      </article>
      <BookingDetailsBox />
      <div className="flex justify-end gap-3 items-center">
        <button className=" bg-blue-600 hover:bg-blue-800 py-3 rounded-md px-5 text-white">Check in</button>
        <button className=" bg-red-700 hover:bg-red-900 py-3 rounded-md px-5 text-white">Delete booking</button>
        <Link to={-1} className="py-3 rounded-md px-5 bg-white text-gray-600 border border-gray-400">Back</Link>
      </div>
    </section>
  )
}

export default BookingDetails
import { Link } from "react-router-dom"
import StatusTag from "./StatusTag"

const BookingDetailsHeader = ({ text, bookingId, status }) => {
  return (
    <article className="flex justify-between items-center">
      <section className="flex items-center gap-4">
        <h2 className="text-4xl font-semibold text-[#374151]">{text} #{bookingId}</h2>
        <StatusTag status={status} />
      </section>
      <Link className=" text-xl text-blue-600 font-semibold" to={-1}>
        &larr; Back
      </Link>
    </article>
  )
}

export default BookingDetailsHeader
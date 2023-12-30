import { useGetBookings } from "../hooks/useGetBookings"
import BookingRow from "./BookingRow"
import Pagination from "./Pagination";

const BookingsList = () => {
  const { isPending, data, error } = useGetBookings();

  if (isPending) return <p>Loading...</p>
  if (error) return <p>erorr</p>
  const { bookings, total_entries }  =  data;
  return (
    <div>
      <div className="grid items-start text-center grid-cols-[1fr,2.2fr,2fr,1fr,1fr,1fr] bg-[#F9FAFB] gap-4 p-4">
        <p className=" font-semibold uppercase text-[#626C71]">Cabin</p>
        <p className=" font-semibold uppercase text-[#626C71]">guest</p>
        <p className=" font-semibold uppercase text-[#626C71]">dates</p>
        <p className=" font-semibold uppercase text-[#626C71]">status</p>
        <p className=" font-semibold uppercase text-[#626C71]">amount</p>
        <p className=" font-semibold uppercase text-[#626C71]"></p>
      </div>
      <ul className="bg-white">
        {
          bookings.map((booking) => (
            <BookingRow key={booking.id} {...booking} />
          ))
        }
      </ul>
      <Pagination count={total_entries} /> 
    </div>
  )
}

export default BookingsList
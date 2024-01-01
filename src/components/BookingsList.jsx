import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye, HiTrash } from "react-icons/hi2";
import { useGetBookings } from "../hooks/useGetBookings"
import BookingRow from "./BookingRow"
import Pagination from "./Pagination";
import BookingMenu from "./BookingMenu";
import BookingListHead from "./BookingListHead";
import { useEffect, useRef, useState } from "react";

const BookingsList = () => {
  // const [showMenu, setShowMenu] = useState(false);
  // const ref = useRef();
  // useEffect(() => {
  //   document.body.addEventListener('click', handleCloseMenu);
  //   return () => document.body.removeEventListener('click', handleCloseMenu)
  // }, [])
  // const handleCloseMenu = (e) => {
  //   if (ref.current && !ref.current.contains(e.target)) {
  //     setShowMenu(false)
  //   }
  // }
  const { isPending, data, error } = useGetBookings();

  if (isPending) return <p>Loading...</p>
  if (error) return <p>erorr</p>
  const { bookings, total_entries }  =  data;
  return (
    <div className="">
      <BookingListHead />
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
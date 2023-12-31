/* eslint-disable react/prop-types */
import {  HiEllipsisVertical } from "react-icons/hi2";
import { format, isToday } from "date-fns";

import { formatCurrency, formatDistanceFromNow } from "../utils/helpers";
import BookingMenu from "./BookingMenu";
import { useEffect, useRef, useState } from "react";

const BookingRow = ( { cabin: { name }, guest: { full_name, email }, start_date, end_date, num_nights, total_price, status, id }) => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener('click', handleCloseMenu, true);
    return () => document.body.removeEventListener('click', handleCloseMenu, true)
  }, [])
  const handleCloseMenu = (e) => {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }
  return (
    <li className=" relative grid grid-cols-[0.6fr,2fr,2.4fr,1.4fr,1fr,3.2rem] text-center bg-white grid-rows-[auto] gap-4 items-start border-t border-gray-200 py-4">
      <span>{name}</span>
      <p className=" flex flex-col text-sm">
        <span>{full_name}</span>
        <span>{email}</span>
      </p>
      <p className=" flex flex-col text-sm">
        <span>{isToday(new Date(start_date))
            ? "Today"
            : formatDistanceFromNow(start_date)}{" "}
          &rarr; {num_nights} night stay</span>
        <span>{format(new Date(start_date), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(end_date), "MMM dd yyyy")}</span>
      </p>
      <p className={`text-[10px] py-1 px-2 rounded-full bg-[#E0F2FE] flex justify-center uppercase font-semibold items-center ${status === 'checked-in' && 'bg-green-200 text-green-600'} ${status === 'checked-out' && 'bg-gray-200 text-gray-600'} text-[#0397D1]`}>
        {status}
      </p>
      <span>
        { formatCurrency(total_price)}
      </span>
      <span ref={ref} className=" items-end text-right">
        <HiEllipsisVertical className="text-2xl text-gray-500 text-right  cursor-pointer items-end" id={id} onClick={() => setShowMenu((menu) => !menu)} />
      </span>
      { showMenu && <BookingMenu status={status} /> }
    </li>
  )
}

export default BookingRow
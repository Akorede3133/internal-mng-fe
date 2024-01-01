/* eslint-disable react/prop-types */
import {  HiEllipsisVertical } from "react-icons/hi2";
import { format, isToday } from "date-fns";

import { formatCurrency, formatDistanceFromNow } from "../utils/helpers";
import BookingMenu from "./BookingMenu";
import {  useState } from "react";
import StatusTag from "./StatusTag";
import useOutsideClick from "../hooks/useOutsideClick";

const BookingRow = ( {cabin: { name }, guest: { full_name, email }, start_date, end_date, num_nights, total_price, status, id }) => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  // const handler = () => setShowMenu(false);
  // const ref = useOutsideClick(handler);
  return (
    <li className=" relative grid grid-cols-[0.6fr,2fr,2.4fr,1.4fr,1fr,3.2rem] text-center bg-white place-items-center gap-4 items-start border-t border-gray-200 py-4">
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
      <StatusTag status={status} />
      <span>
        { formatCurrency(total_price)}
      </span>
      <button  className=" items-end text-right" onClick={() => setShowMenu((prev) => !prev)}>
        <HiEllipsisVertical className="w-full text-2xl text-gray-500 text-right  cursor-pointer items-end" id={id}  />
      </button>
      { showMenu && <BookingMenu status={status} id={id} setShowMenu={setShowMenu} /> }
    </li>
  )
}

export default BookingRow
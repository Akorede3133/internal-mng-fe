import { HiEllipsisVertical } from "react-icons/hi2";

const BookingRow = () => {
  return (
    <li className="grid grid-cols-[1fr,2.2fr,2fr,1fr,1fr,1fr] text-center bg-white px-4 grid-rows-[auto] gap-4 items-start border-t border-gray-200 py-4">
      <span>007</span>
      <p className=" flex flex-col text-sm">
        <span>Jonas Schmedtmann</span>
        <span>jonas.schmedtmann@gmail.com</span>
      </p>
      <p className=" flex flex-col text-sm">
        <span>In 26 days 6 night stay</span>
        <span>Jan 23 2024 — Jan 29 2024</span>
      </p>
      <p className="text-[10px] py-1 px-2 rounded-md  bg-[#E0F2FE] flex justify-center uppercase font-semibold items-center text-[#0397D1]">
        unconfirmed
      </p>
      <span>
        $3,000.00
      </span>
      <span>
        <HiEllipsisVertical />
      </span>
    </li>
  )
}

export default BookingRow
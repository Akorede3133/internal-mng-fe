import { HiHomeModern, HiOutlineChatBubbleBottomCenterText, HiOutlineCheckCircle, HiOutlineCurrencyDollar } from "react-icons/hi2"

const BookingDetailsBox = () => {
  return (
    <article className="mt-10 mb-7">
      <div className=" flex justify-between items-center text-2xl bg-blue-600 text-white rounded-tl-md rounded-tr-md py-5 px-10">
        <p className="flex gap-2 items-center">
          <HiHomeModern />
          <span>14 nights in Cabin 002</span>
        </p>
        <p>
        Tue, May 07 2024 (In 4 months) — Tue, May 21 2024
        </p>
      </div>
      <div className="bg-white py-5 px-10 shadow-[0_0_1px_rgba(0,0,0,0.2),-0_-0_1px_rgba(0,0,0,0.2)] rounded-bl-md rounded-br-md">
        <ul className="flex items-center gap-10">
          <li className="flex gap-4 items-center">
            <img src="https://flagcdn.com/sg.svg" alt=""  className="w-4 object-cover"/>
            <span className="font-semibold">Jonas Schmedtmann + 1 guests</span>
          </li>
          <li className=" list-disc text-gray-400">
            jonas.schmedtmann@gmail.com
          </li>
          <li className=" list-disc text-gray-400">National ID 43434343434</li>
        </ul>
       <div className=" my-5 space-y-2">
        <p className=" text-[1.1rem] flex items-center gap-2 font-semibold text-gray-600">
            <HiOutlineChatBubbleBottomCenterText className="text-blue-600 text-xl" />
            <span>Observations</span>
            <span>hhh</span>
          </p>
          <p className=" text-[1.1rem] flex items-center gap-2 font-semibold text-gray-600">
            <HiOutlineCheckCircle className="text-blue-600 text-xl" />
            <span>Breakfast included?</span>
            <span>no</span>
          </p>
       </div>
       <div className="py-5 px-10 flex justify-between bg-[#FEF9C3] rounded-md  text-[#A16207] my-8">
        <p className="flex font-semibold gap-3 items-center">
          <HiOutlineCurrencyDollar />
          <span>Total price</span>
          <span className=" font-medium">$3,000.00</span>
        </p>
        <p className=" font-bold uppercase">Will pay at property</p>
       </div>
       <span className="text-sm text-right block">Booked Fri, Dec 29 2023, 1:10 PM</span>
      </div>
    </article>
  )
}

export default BookingDetailsBox
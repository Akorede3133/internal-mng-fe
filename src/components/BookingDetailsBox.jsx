import { format, set } from "date-fns"
import { HiHomeModern, HiOutlineChatBubbleBottomCenterText, HiOutlineCheckCircle, HiOutlineCurrencyDollar } from "react-icons/hi2"
// import { useGetSettings } from '../hooks/useGetSettings'
import { formatCurrency, formatDistanceFromNow } from "../utils/helpers"

const BookingDetailsBox = ({breakfastPrice, num_nights, start_date, observations, num_guests, end_date, cabin_price, extras_price, has_breakfast, is_paid, total_price, created_at, cabin: { name: cabinName}, guest: { full_name, country_flag, email, national_id }}) => {
  // const { data: settings } = useGetSettings();
  const breakfastCost =  breakfastPrice * num_guests * num_nights;
  const total_cost = has_breakfast ? breakfastCost + total_price  : total_price;
  return (
    <article className="mt-10 mb-7">
      <div className=" flex justify-between items-center text-2xl bg-blue-600 text-white rounded-tl-md rounded-tr-md py-5 px-10">
        <p className="flex gap-2 items-center">
          <HiHomeModern />
          <span>{num_nights} nights in Cabin {cabinName}</span>
        </p>
        <p>
        { `${format(new Date(start_date), "EEE, MMM dd yyyy")} (${formatDistanceFromNow(start_date)}) — ${format(new Date(end_date), "EEE, MMM dd yyyy")} `} 
        </p>
      </div>
      <div className="bg-white py-5 px-10 shadow-[0_0_1px_rgba(0,0,0,0.2),-0_-0_1px_rgba(0,0,0,0.2)] rounded-bl-md rounded-br-md">
        <ul className="flex items-center gap-10">
          <li className="flex gap-4 items-center">
            <img src={country_flag} alt=""  className="w-4 object-cover"/>
            <span className="font-semibold">{full_name} + {num_guests} guests</span>
          </li>
          <li className=" list-disc text-gray-400">
            {email}
          </li>
          <li className=" list-disc text-gray-400">National ID <span>{national_id}</span> </li>
        </ul>
       <div className=" my-5 space-y-2">
        { observations &&
          <p className=" text-[1.1rem] flex items-center gap-2 font-semibold text-gray-600">
              <HiOutlineChatBubbleBottomCenterText className="text-blue-600 text-xl" />
              <span>Observations:</span>
              <span>{observations}</span>
          </p>
        }
          <p className=" text-[1.1rem] flex items-center gap-2 font-semibold text-gray-600">
            <HiOutlineCheckCircle className="text-blue-600 text-xl" />
            <span>Breakfast included?</span>
            <span className=" capitalize">{has_breakfast ? 'yes' : 'no'}</span>
          </p>
       </div>
       <div className={` ${ is_paid ? 'bg-[#DCFCE7] text-[#188240]' : ' text-[#A16207] bg-[#FEF9C3]' } py-5 px-10 flex justify-between  rounded-md  my-8`}>
        <p className="flex font-semibold gap-3 items-center">
          <HiOutlineCurrencyDollar />
          <span>Total price</span>
          <span className=" font-medium">{`${formatCurrency(total_price)} ${ has_breakfast ? `(${formatCurrency(cabin_price)} cabin + ${formatCurrency(extras_price)} breakfast)`: ''}`}</span>
        </p>
        <p className={`font-bold uppercase`}>{` ${ is_paid ? ' paid' : 'Will pay at property'} `}</p>
       </div>
       <span className="text-sm text-right block">{`Booked ${format(new Date(created_at), 'EEE, MMM dd yyyy, p')}`}</span>
      </div>
    </article>
  )
}

export default BookingDetailsBox
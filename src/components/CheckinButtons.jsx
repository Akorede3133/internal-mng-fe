import { Link } from "react-router-dom"
import { useCheckin } from "../hooks/useCheckin"

const CheckinButtons = ({ id, hasPaid, addBreakfast, breakfastCost, totalCost }) => {
  console.log(addBreakfast);
  const { checkinBooking, isCheckingin } = useCheckin();
  const data = addBreakfast ? {
    status: 'checked-in',
    is_paid: true,
    has_breakfast: true,
    extras_price: breakfastCost,
    total_price: totalCost
  } :   {
    status: 'checked-in',
    is_paid: true,
  }

  console.log(data);

  const handleCheckin = () => {
    console.log('clicked');
    if (!hasPaid) return
    checkinBooking({id, data})
  }
  return (
    <div className="flex justify-end gap-3 items-center mb-12">
      <button className={` bg-blue-600 hover:bg-blue-800 py-3 rounded-md px-5 text-white ${!hasPaid || isCheckingin ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={handleCheckin} disabled={!hasPaid || isCheckingin}>Check in Booking #{id}</button>
      <Link to={-1} className="py-3 rounded-md px-5 bg-white text-gray-600 border border-gray-400">Back</Link>
    </div>
  )
}

export default CheckinButtons
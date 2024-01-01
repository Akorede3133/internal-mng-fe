import { useState } from "react";
import { formatCurrency } from "../utils/helpers";
import CheckinButtons from "./CheckinButtons";

const CheckinCheckBox = ({ hasBreakfast, isPaid, totalPrice, breakfastPrice, numGuests, id, numNights }) => {

  const [hasPaid, setHasPaid] = useState(isPaid)
  const [addBreakfast, setAddBreakfast] = useState(hasBreakfast)
  const breakfastCost =  breakfastPrice * numGuests * numNights;

  const totalCost = addBreakfast ? totalPrice + breakfastCost : totalPrice;

  return (
    <div className="my-10 space-y-4">
      { hasBreakfast ||
         <section className="bg-white rounded-md shadow-md py-5 px-5 flex items-center gap-4">
          <input type="checkbox" name="breakfast" checked={addBreakfast} onChange={() => {
            if (hasPaid) setHasPaid(false)
            setAddBreakfast((prev) => !prev)}
           } id="breakfast" className=" cursor-pointer w-6 h-6" />
          <label htmlFor="breakfast">Want to add breakfast for {formatCurrency(breakfastCost)}?</label>
        </section>
      }
      <section className="bg-white rounded-md shadow-md py-5 px-5 flex items-center gap-4">
        <input type="checkbox" name="total_price" onChange={()=> setHasPaid((prev) => !prev)} checked={hasPaid} id="total_price" className={` w-6 h-6 ${hasPaid ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={hasPaid} />
        <label htmlFor="total_price">
            I confirm that Jonas Schmedtmann has paid the total amount of { addBreakfast ? `${formatCurrency(totalCost)} (${formatCurrency(totalPrice)} + ${formatCurrency(breakfastCost)})`: formatCurrency(totalCost) }
        </label>
      </section>
      <CheckinButtons id={id} hasPaid={hasPaid} addBreakfast={addBreakfast} breakfastCost={breakfastCost} totalCost={totalCost} />

    </div>
  )
}

export default CheckinCheckBox
import { useGetBooking } from "../hooks/useGetBooking"
import { useGetSettings } from "../hooks/useGetSettings"
import BookingDetailsBox from "./BookingDetailsBox"
import BookingDetailsHeader from "./BookingDetailsHeader"
import CheckinCheckBox from "./CheckinCheckBox"

const CheckinDetails = () => {
  const {data: booking, isPending, error} = useGetBooking();
  const { data: settings, isPending: isGettingSettings } = useGetSettings();
  if (isPending || isGettingSettings) return <p>loading....</p>
  if (error) return <p>{error.message}</p>

  const { id, status, has_breakfast, is_paid, total_price, num_guests, num_nights } = booking;
  const { breakfast_price } = settings;
  return (
    <section>
      <BookingDetailsHeader text="Check in booking" id={id} status={status} />
      <BookingDetailsBox {...booking} breakfastPrice={breakfast_price}  />
      <CheckinCheckBox id={id} hasBreakfast={has_breakfast} isPaid={is_paid} breakfastPrice={breakfast_price} totalPrice={total_price} numGuests={num_guests} numNights={num_nights} />
    </section>
  )
}

export default CheckinDetails
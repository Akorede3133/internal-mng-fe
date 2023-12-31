import { useGetBooking } from "../hooks/useGetBooking"
import { useGetSettings } from "../hooks/useGetSettings"
import BookingDetailsBox from "./BookingDetailsBox"
import BookingDetailsHeader from "./BookingDetailsHeader"
import CheckinButtons from "./CheckinButtons"
import CheckinCheckBox from "./CheckinCheckBox"

const CheckinDetails = () => {
  const {data: booking, isPending, error} = useGetBooking();
  const { data: settings, isPending: isGettingSettings } = useGetSettings();
  if (isPending || isGettingSettings) return <p>loading....</p>
  if (error) return <p>{error.message}</p>

  const { id, status, has_breakfast } = booking;
  const { breakfast_price } = settings;
  return (
    <section>
      <BookingDetailsHeader text="Check in booking" id={id} status={status} />
      <BookingDetailsBox {...booking} breakfastPrice={breakfast_price}  />
      <CheckinCheckBox hasBreakfast={has_breakfast} />
      <CheckinButtons  />
    </section>
  )
}

export default CheckinDetails
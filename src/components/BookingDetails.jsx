import { Link } from "react-router-dom"
import StatusTag from "./StatusTag"
import BookingDetailsBox from "./BookingDetailsBox"
import BookingDetailsHeader from "./BookingDetailsHeader"
import BookingDetailsButtons from "./BookingDetailsButtons"
import { useGetBooking } from "../hooks/useGetBooking"
import { useGetSettings } from "../hooks/useGetSettings"

const BookingDetails = () => {
  const {data: booking, isPending, error} = useGetBooking();
  const { data: settings, isPending: isGettingSettings } = useGetSettings();
  if (isPending || isGettingSettings) return <p>loading....</p>
  if (error) return <p>{error.message}</p>

  const { id, status } = booking;
  const { breakfast_price } = settings;
  return (
    <section>
      <BookingDetailsHeader text="Booking" bookingId={id} status={status} />
      <BookingDetailsBox {...booking} breakfastPrice={breakfast_price} />
      <BookingDetailsButtons status={status} id={id} />
    </section>
  )
}

export default BookingDetails
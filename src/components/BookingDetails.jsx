import { Link } from "react-router-dom"
import StatusTag from "./StatusTag"
import BookingDetailsBox from "./BookingDetailsBox"
import BookingDetailsHeader from "./BookingDetailsHeader"
import BookingDetailsButtons from "./BookingDetailsButtons"

const BookingDetails = () => {
  return (
    <section>
      <BookingDetailsHeader text="Booking" />
      <BookingDetailsBox />
      <BookingDetailsButtons />
    </section>
  )
}

export default BookingDetails
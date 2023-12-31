import BookingDetailsBox from "./BookingDetailsBox"
import BookingDetailsHeader from "./BookingDetailsHeader"
import CheckinButtons from "./CheckinButtons"
import CheckinCheckBox from "./CheckinCheckBox"

const CheckinDetails = () => {
  return (
    <section>
      <BookingDetailsHeader text="Check in booking" />
      <BookingDetailsBox />
      <CheckinCheckBox />
      <CheckinButtons />
    </section>
  )
}

export default CheckinDetails
import BookingsList from "./BookingsList"

const BookingsTable = () => {
  return (
    <div >
      <h2 className=" text-3xl font-semibold pb-10 ">All bookings</h2>
      <BookingsList />
    </div>
  )
}

export default BookingsTable
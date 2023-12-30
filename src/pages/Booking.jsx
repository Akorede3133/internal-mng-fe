import BookingsTable from "../components/BookingsTable"
import Filter from "../components/Filter"
import Sort from "../components/Sort"

const Booking = () => {
  return (
    <section className="py-10 w-[90%] mx-auto relative">
       <div className="flex justify-between items-center my-5">
        <h2>All Bookings</h2>
        <div className=" flex items-center gap-4">
          <Filter type='status' options={[{value: '', label: 'All'}, { value: 'checked-out', label: 'Checked out'}, { value: 'checked-in', label: 'Checked in' },  { value: 'unconfirmed', label: 'Unconfirmed' }]} />
          <Sort />
        </div>
      </div>
      <BookingsTable />
    </section>
  )
}

export default Booking
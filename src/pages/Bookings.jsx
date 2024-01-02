import BookingsTable from "../components/BookingsTable"
import Filter from "../components/Filter"
import Sort from "../components/Sort"

const Bookings = () => {
  return (
    <section className="py-10 dark:bg-slate-800 w-[90%] mx-auto relative">
       <div className="flex justify-between items-center my-5">
        <h2>All Bookings</h2>
        <div className=" flex items-center gap-4">
          <Filter type='status' options={[{value: '', label: 'All'}, { value: 'checked-out', label: 'Checked out'}, { value: 'checked-in', label: 'Checked in' },  { value: 'unconfirmed', label: 'Unconfirmed' }]} />
          <Sort options={[
              { value: "start_date-desc", label: "Sort by date (recent first)" },
              { value: "start_date-asc", label: "Sort by date (earlier first)" },
              {
                value: "total_price-desc",
                label: "Sort by amount (high first)",
              },
              { value: "total_price-asc", label: "Sort by amount (low first)" },
            ]} 
          />
        </div>
      </div>
      <BookingsTable />
    </section>
  )
}

export default Bookings
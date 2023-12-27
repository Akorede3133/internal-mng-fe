const Settings = () => {
  return (
    <section  className="py-10 w-[90%] mx-auto">
      <h2 className=" text-3xl pb-5 font-semibold">Update hotel settings</h2>
      <form className="bg-white shadow-md p-4" >
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="min_booking" className=" font-medium">Minimum nights/booking</label>
        <input type="number"  id="min_booking" className=" border border-gray-300 rounded-md px-3 py-2" value={5}  />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="max_booking" className=" font-medium">Maximum nights/booking</label>
        <input type="number"  id="max_booking" className=" border border-gray-300 rounded-md px-3 py-2" value={5}  />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="max_guests" className=" font-medium">Maximum guests/booking</label>
        <input type="number"  id="max_guests" className=" border border-gray-300 rounded-md px-3 py-2" value={5}  />
      </section>
      <section className="grid grid-cols-3 items-center py-3">
        <label htmlFor="breakfast_price" className=" font-medium">Breakfast price</label>
        <input type="number"  id="breakfast_price" className=" border border-gray-300 rounded-md px-3 py-2" value={5}  />
      </section>
    </form>
    </section>
  )
}

export default Settings
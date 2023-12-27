import { useGetSettings } from "../hooks/useGetSettings"

const Settings = () => {
  const { isPending, data, error } = useGetSettings();

  const handleSettingUpdate = (e) => {

  }

  if (isPending) return <p>loading...</p>

  const { min_nights, max_nights, max_guests, breakfast_price } = data;

  return (
    <section  className="py-10 w-[90%] mx-auto">
      <h2 className=" text-3xl pb-5 font-semibold">Update hotel settings</h2>
      <form className="bg-white shadow-md p-4" >
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="min_nights" className=" font-medium">Minimum nights/booking</label>
        <input type="number"  id="min_nights" className=" border border-gray-300 rounded-md px-3 py-2" value={min_nights}  />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="max_nights" className=" font-medium">Maximum nights/booking</label>
        <input type="number"  id="max_nights" className=" border border-gray-300 rounded-md px-3 py-2" value={max_nights}  />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="max_guests" className=" font-medium">Maximum guests/booking</label>
        <input type="number"  id="max_guests" className=" border border-gray-300 rounded-md px-3 py-2" value={max_guests}  />
      </section>
      <section className="grid grid-cols-3 items-center py-3">
        <label htmlFor="breakfast_price" className=" font-medium">Breakfast price</label>
        <input type="number"  id="breakfast_price" className=" border border-gray-300 rounded-md px-3 py-2" value={breakfast_price}  />
      </section>
    </form>
    </section>
  )
}

export default Settings
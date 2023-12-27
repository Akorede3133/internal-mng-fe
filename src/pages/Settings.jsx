import { useGetSettings } from "../hooks/useGetSettings"
import { useUpdateSettings } from "../hooks/useUpdateSettings";

const Settings = () => {
  const { isPending, data, error } = useGetSettings();
  const { isUpdating, updateSetting } = useUpdateSettings();

  const handleSettingUpdate = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    const setting = {
      setting: {
        [name]: value
      }
    }
    updateSetting(setting)
  }

  if (isPending) return <p>loading...</p>
  if (error) return <p>{error.message}</p>


  const { min_nights, max_nights, max_guests, breakfast_price } = data;

  return (
    <section  className="py-10 w-[90%] mx-auto">
      <h2 className=" text-3xl pb-5 font-semibold">Update hotel settings</h2>
      <form className="bg-white shadow-md p-4" >
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="min_nights" className=" font-medium">Minimum nights/booking</label>
        <input type="number" name="min_nights"  id="min_nights" className=" border border-gray-300 rounded-md px-3 py-2" defaultValue={min_nights} onBlur={handleSettingUpdate} disabled={isUpdating}  />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="max_nights" className=" font-medium">Maximum nights/booking</label>
        <input type="number" name="max_nights"  id="max_nights" className=" border border-gray-300 rounded-md px-3 py-2" defaultValue={max_nights} onBlur={handleSettingUpdate} disabled={isUpdating}  />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="max_guests" className=" font-medium">Maximum guests/booking</label>
        <input type="number" name="max_guests"  id="max_guests" className=" border border-gray-300 rounded-md px-3 py-2" defaultValue={max_guests} onBlur={handleSettingUpdate} disabled={isUpdating} />
      </section>
      <section className="grid grid-cols-3 items-center py-3">
        <label htmlFor="breakfast_price" className=" font-medium">Breakfast price</label>
        <input type="number" name="breakfast_price"  id="breakfast_price" className=" border border-gray-300 rounded-md px-3 py-2" defaultValue={breakfast_price} onBlur={handleSettingUpdate} disabled={isUpdating}  />
      </section>
    </form>
    </section>
  )
}

export default Settings
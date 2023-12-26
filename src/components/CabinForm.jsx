import { HiOutlineXMark } from "react-icons/hi2"

const CabinForm = () => {
  return (
    <form className="p-4 shadow-lg my-10 absolute z-10 w-[90%] md:w-[60%] left-[50%] translate-x-[-50%]  top-[5%]  bg-white ">
      <div className=" flex justify-end">
      <HiOutlineXMark className=" text-2xl cursor-pointer" />
      </div>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="name" className=" font-medium">Cabin name</label>
        <input type="text" name="name" id="name" className=" border border-gray-300 rounded-md py-1" />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="max_capacity" className=" font-medium">Maximum capacity</label>
        <input type="number" name="max_capacity" id="max_capacity" className=" border border-gray-300 rounded-md py-1" />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="regular_price" className=" font-medium">Regular price</label>
        <input type="number" name="regular_price" id="name" className=" border border-gray-300 rounded-md py-1" />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="discount" className=" font-medium">Discount</label>
        <input type="number" name="discount" id="name" className=" border border-gray-300 rounded-md py-1" />
      </section>
      <section className="grid grid-cols-3 items-center  py-3">
        <label htmlFor="discount" className=" font-medium">Description</label>
        <textarea name="description" id="description" className=" border border-gray-300 rounded-md px-3"></textarea>
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="image" className=" font-medium">Cabin photo</label>
        <input type="file" name="image" id="image" className="border bg-blue-500 border-gray-300 rounded-md py-2 px-4" />
      </section>

      <section className=" flex justify-end gap-4 mt-5">
        <button className="px-4 py-2 text-gray-300 border border-gray-300 rounded-md font-medium">Cancel</button>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md font-medium">Create new cabin</button>
      </section>
    </form>
  )
}

export default CabinForm
const UserDataUpdateForm = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold pb-7">Update user data</h3>
      <form  className=" bg-white p-4 shadow-md rounded-md">
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="name" className=" font-medium">Full name</label>
        <input type="text"  id="name" className=" border border-gray-300 rounded-md py-2 px-3 outline-blue-600" />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="email" className=" font-medium">Email address</label>
        <input type="email" id="email" className=" border border-gray-300 rounded-md py-2 px-3 outline-blue-600"  />
      </section>

      <section className=" flex justify-end gap-4 mt-5">
        <button type="reset" className="px-4 py-2 text-gray-300 border border-gray-300 rounded-md font-medium" >Cancel</button>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md font-medium" >Update account</button>
      </section>
    </form>
    </div>
  )
}

export default UserDataUpdateForm
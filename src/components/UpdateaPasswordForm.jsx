const UpdateaPasswordForm = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold pb-7">Update password</h3>
      <form action="" className=" bg-white p-4 shadow-md rounded-md">
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="password" className=" font-medium">Password</label>
        <input type="password" id="password" className=" border border-gray-300 rounded-md py-2 px-3 outline-blue-600"  />
        </section>
        <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="password_confirmation" className=" font-medium">Repeat password</label>
        <input type="password" id="password_confirmation" className=" border border-gray-300 rounded-md py-2 px-3 outline-blue-600" />
        </section>
        <section className=" flex justify-end gap-4 mt-5">
        <button type="reset" className="px-4 py-2 text-gray-300 border border-gray-300 rounded-md font-medium" >Cancel</button>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md font-medium" >Update password</button>
      </section>
      </form>
    </div>
  )
}

export default UpdateaPasswordForm
import { useState } from "react";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { useUpdateAccount } from "../hooks/useUpdateAccount";

const UpdateaPasswordForm = () => {
  const { updateUserAccount, isUpdating } = useUpdateAccount();

  const [ passwordInfo, setPasswordInfo ] = useState({
    password: '',
    password_confirmation: '',
    current_password: ''
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setPasswordInfo((prev) => (
      {
        ...prev,
        [name]: value
      }
    ))
  }

  console.log(passwordInfo);

  const handleUpdate = (e) => {
    e.preventDefault();
    const userData = {
      user: {
        password,
        password_confirmation,
        current_password
      }
    }
    updateUserAccount(userData, {
      onSettled: () => {
        setPasswordInfo({
          password: '',
          password_confirmation: '',
          current_password: ''
        })
      }
    });
  }
  const { password, password_confirmation, current_password } = passwordInfo
  return (
    <div>
      <h3 className="text-2xl font-semibold pb-7">Update password</h3>
      <form onSubmit={handleUpdate} className=" bg-white p-4 shadow-md rounded-md">
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="password" className=" font-medium">Password</label>
        <input type="password" name='password' value={password} id="password" className=" border border-gray-300 rounded-md py-2 px-3 outline-blue-600" onChange={handleChange}  />
        </section>
        <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="password_confirmation" className=" font-medium">Repeat password</label>
        <input type="password" id="password_confirmation" value={password_confirmation} name='password_confirmation' className=" border border-gray-300 rounded-md py-2 px-3 outline-blue-600" onChange={handleChange} />
        </section>
        <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="current_password" className=" font-medium">Current password</label>
        <input type="password" id="current_pass" name="current_password" className=" border border-gray-300 rounded-md py-2 px-3 outline-blue-600" value={current_password} onChange={handleChange}  />
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
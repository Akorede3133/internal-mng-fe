import { useForm } from "react-hook-form"
const REGEX =  /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/
const SingupForm = () => {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  const { errors } = formState;
  return (
    <form  onSubmit={handleSubmit(onSubmit)} className=" bg-white p-4 shadow-md rounded-md">
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="name" className=" font-medium">Full name</label>
        <input type="text"  id="name" className=" border border-gray-300 rounded-md py-2 px-3 outline-blue-600" {...register('name', { required: 'Name must be present' })} />
        {errors.name && <span className="pl-2 text-red-500">{errors.name.message}</span>}
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="email" className=" font-medium">Email address</label>
        <input type="email" id="email" className=" border border-gray-300 rounded-md py-2 px-3 outline-blue-600" {...register('email',{ 
        required: "This field is required",  
        pattern: {
          value:  /\S+@\S+\.\S+/,
          message: 'Enter a valid email'
        } })} />
        {errors.email && <span className="pl-2 text-red-500">{errors.email.message}</span>}
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="password" className=" font-medium">Password</label>
        <input type="password" id="password" className=" border border-gray-300 rounded-md py-2 px-3 outline-blue-600" {...register('password')} />
        </section>
        <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="password_confirmation" className=" font-medium">Repeat password</label>
        <input type="password" id="password_confirmation" className=" border border-gray-300 rounded-md py-2 px-3 outline-blue-600" {...register("password_confirmation")} />
        </section>
      <section className=" flex justify-end gap-4 mt-5">
        <button type="reset" className="px-4 py-2 text-gray-300 border border-gray-300 rounded-md font-medium" >Cancel</button>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md font-medium" >Create new user </button>
      </section>
    </form>
  )
}

export default SingupForm
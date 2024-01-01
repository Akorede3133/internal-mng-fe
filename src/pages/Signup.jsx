import SingupForm from "../components/SingupForm"

const Signup = () => {
  return (
    <section className="py-10 w-[90%] mx-auto relative">
      <h3 className=" text-4xl text-[#374151] font-semibold pb-10 ">Create a new user</h3>
      <SingupForm />
   </section>
  )
}

export default Signup
import UpdateaPasswordForm from "../components/UpdateaPasswordForm"
import UserDataUpdateForm from "../components/UserDataUpdateForm"

const Profile = () => {
  return (
    <section className="py-10 w-[90%] mx-auto relative space-y-10 mb-20">
      <h2 className=" text-4xl pb-5 font-semibold">Update your account</h2>
      <UserDataUpdateForm />
      <UpdateaPasswordForm />
    </section>
  )
}

export default Profile
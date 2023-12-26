import CabinForm from "../components/CabinForm"
import CabinList from "../components/CabinList"

const Cabin = () => {
  return (
    <section className="py-10 w-[90%] mx-auto">
      <h2>All cabins</h2>
      <CabinList />
      <CabinForm />
    </section>
  )
}

export default Cabin
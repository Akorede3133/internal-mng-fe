import CabinList from "../components/CabinList"
import AddCabin from "../components/AddCabin";

const Cabin = () => {
  return (
    <section className="py-10 w-[90%] mx-auto relative">
      <h2>All cabins</h2>
      <CabinList />
      <AddCabin />
    </section>
  )
}

export default Cabin
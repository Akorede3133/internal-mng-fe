import CabinList from "../components/CabinList"
import AddCabin from "../components/AddCabin";
import Filter from "../components/Filter";

const Cabin = () => {
  return (
    <section className="py-10 w-[90%] mx-auto relative">
      <div className="flex justify-between items-center">
        <h2>All cabins</h2>
        <Filter options={[{value: '', label: 'All'}, { value: 'no-discount', label: 'No discount'}, { value: 'with-discount', label: 'With discount' }]} />
      </div>
      <CabinList />
      <AddCabin />
    </section>
  )
}

export default Cabin
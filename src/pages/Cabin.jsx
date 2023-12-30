import CabinList from "../components/CabinList"
import AddCabin from "../components/AddCabin";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

const Cabin = () => {
  return (
    <section className="py-10 w-[90%] mx-auto relative">
      <div className="flex justify-between items-center my-5">
        <h2>All cabins</h2>
        <div className=" flex items-center gap-4">
          <Filter type='discount' options={[{value: '', label: 'All'}, { value: 'no-discount', label: 'No discount'}, { value: 'with-discount', label: 'With discount' }]} />
          <Sort />
        </div>
      </div>
      <CabinList />
      <AddCabin />
    </section>
  )
}

export default Cabin
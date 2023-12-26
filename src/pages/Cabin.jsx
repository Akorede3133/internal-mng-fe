import { useState } from "react"
import CabinForm from "../components/CabinForm"
import CabinList from "../components/CabinList"

const Cabin = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm((prev) => !prev)
  }
  return (
    <section className="py-10 w-[90%] mx-auto">
      <h2>All cabins</h2>
      <CabinList toggleForm={toggleForm} />
      <div className="flex justify-center">
        <button className=" bg-lime-600 px-4 py-2 text-white rounded-md mt-4" onClick={toggleForm}>Create a Cabin</button>
      </div>
      {showForm && <CabinForm toggleForm={toggleForm} /> }
    </section>
  )
}

export default Cabin
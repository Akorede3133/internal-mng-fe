import { useState } from "react"
import CabinForm from "../components/CabinForm"
import CabinList from "../components/CabinList"
import Overlay from "../components/Overlay";
import AddCabin from "../components/AddCabin";

const Cabin = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm((prev) => !prev)
  }
  return (
    <section className="py-10 w-[90%] mx-auto relative">
      <h2>All cabins</h2>
      <CabinList toggleForm={toggleForm} />
      <AddCabin />
    </section>
  )
}

export default Cabin
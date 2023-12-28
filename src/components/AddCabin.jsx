import CabinForm from "./CabinForm"
import Modal from "./Modal"

const AddCabin = () => {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <button className=" bg-lime-600 px-4 py-2 text-white rounded-md mt-4">Create a Cabin</button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CabinForm  />
      </Modal.Window>
    </Modal>
  )
}


export default AddCabin
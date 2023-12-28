import { useDeleteCabin } from "../hooks/useDeleteCabin"

const DeleteCabinWindow = ({ onCloseModal, id }) => {
  const {isDeleting, deleteCabin} = useDeleteCabin()
  return (
    <div>
      <h2>Delete cabins</h2>
      <p>Are you sure you want to delete this cabins permanently? This action cannot be undone.</p>
      <section className=" flex justify-end gap-4 mt-5">
        <button type="button" className="px-4 py-2 text-gray-300 border border-gray-300 rounded-md font-medium" onClick={() => onCloseModal()}>Cancel</button>
        <button className=' text-sm  bg-red-600 text-white px-4 py-1 rounded-md' onClick={() => deleteCabin(id)}  disabled={isDeleting}>
          Delete
        </button>
      </section>
    </div>
  )
}

// onClick={() => mutate(id)} disabled={isDeleting}

export default DeleteCabinWindow
const DeleteWindow = ( { onCloseModal, resourceName, onConfirm, disabled }) => {
  return (
    <div>
      <h2>Delete {resourceName}</h2>
      <p>Are you sure you want to delete this {resourceName} permanently? This action cannot be undone.</p>
      <section className=" flex justify-end gap-4 mt-5">
        <button type="button" className="px-4 py-2 text-gray-300 border border-gray-300 rounded-md font-medium" onClick={onCloseModal}>Cancel</button>
        <button className=' text-sm  bg-red-600 text-white px-4 py-1 rounded-md' onClick={onConfirm}  disabled={disabled}>
          Delete
        </button>
      </section>
    </div>
  )
}

export default DeleteWindow
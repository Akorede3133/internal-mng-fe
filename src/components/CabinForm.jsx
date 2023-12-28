import { useForm } from "react-hook-form"
import { useCreateCabin } from "../hooks/useCreateCabin";
import { useEditCabin } from "../hooks/useEditCabin";
const CabinForm = ({ cabin = {}, onCloseModal }) => {
  const { id: cabinId } = cabin;
  const { register, handleSubmit } = useForm({
    //if cabinId exists then we are editing else we are creating a new cabin
    defaultValues: cabin
  });
  const { isCreating, createNewCabin } = useCreateCabin()
  const { isEditing, editCabin } = useEditCabin();


  const onSubmit = (data) => {
    cabinId ? editCabin(data, {
      onSuccess: () => {
        onCloseModal()
      }
    }) : createNewCabin(data, {
      onSuccess: () => {
        onCloseModal()
      }
    })
  }

  return (
    <form  onSubmit={handleSubmit(onSubmit)} className="">
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="name" className=" font-medium">Cabin name</label>
        <input type="text"  id="name" className=" border border-gray-300 rounded-md py-1" {...register('name')} />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="max_capacity" className=" font-medium">Maximum capacity</label>
        <input type="number" id="max_capacity" className=" border border-gray-300 rounded-md py-1" {...register('max_capacity')} />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="regular_price" className=" font-medium">Regular price</label>
        <input type="number" id="name" className=" border border-gray-300 rounded-md py-1" {...register('regular_price')} />
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="discount" className=" font-medium">Discount</label>
        <input type="number" name="discount" id="name" className=" border border-gray-300 rounded-md py-1" {...register('discount')} />
      </section>
      <section className="grid grid-cols-3 items-center  py-3">
        <label htmlFor="discount" className=" font-medium">Description</label>
        <textarea id="description" className=" border border-gray-300 rounded-md px-3" {...register('description')}></textarea>
      </section>
      <section className="grid grid-cols-3 items-center border-b  border-gray-300 py-3">
        <label htmlFor="image" className=" font-medium">Cabin photo</label>
        <input type="file" id="image" className="border bg-blue-500 border-gray-300 rounded-md py-2 px-4" {...register('image')} />
      </section>

      <section className=" flex justify-end gap-4 mt-5">
        <button type="button" className="px-4 py-2 text-gray-300 border border-gray-300 rounded-md font-medium" onClick={() => onCloseModal()}>Cancel</button>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md font-medium" disabled={isCreating || isEditing }> { cabinId ? 'Edit cabin' : 'Create new cabin' }</button>
      </section>
    </form>
  )
}

export default CabinForm
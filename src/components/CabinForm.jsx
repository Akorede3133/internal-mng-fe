import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form"
import { HiOutlineXMark } from "react-icons/hi2"
import { createCabin, updateCabin } from "../services/apiCabins";
import toast from "react-hot-toast";
import { useCreateCabin } from "../hooks/useCreateCabin";
import { useEditCabin } from "../hooks/useEditCabin";

const CabinForm = ({ toggleForm, cabin, id, toggleEdit }) => { 

  const { register, handleSubmit, reset } = useForm({
    defaultValues: toggleEdit ? cabin : {}
  });
  const { isCreating, createNewCabin } = useCreateCabin()
  const { isEditing, editCabin } = useEditCabin();


  const onSubmit = (data) => {
    toggleEdit ? editCabin(data, {
      onSuccess: () => {
        toggleEdit()
        reset()
      }
    }) : createNewCabin(data, {
      onSuccess: () => {
        reset()
        toggleForm()
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 shadow-lg my-10 absolute z-10 w-[90%] md:w-[60%] left-[50%] translate-x-[-50%]  top-[5%]  bg-white">
      <div className=" flex justify-end">
      <HiOutlineXMark className=" text-2xl cursor-pointer" onClick={toggleForm || toggleEdit} />
      </div>
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
        <button type="button" className="px-4 py-2 text-gray-300 border border-gray-300 rounded-md font-medium" onClick={toggleForm || toggleEdit }>Cancel</button>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md font-medium" disabled={isCreating || isEditing }> { toggleEdit ? 'Edit cabin' : 'Create new cabin' }</button>
      </section>
    </form>
  )
}

export default CabinForm
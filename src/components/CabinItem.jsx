/* eslint-disable react/prop-types */
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2'
import { deleteCabin } from '../services/apiCabins'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import CabinForm from './CabinForm'
import { useState } from 'react'


const CabinItem = ({ cabin }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const { name, image_url, regular_price, max_capacity, discount, id } = cabin
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
      toast.success('Cabin deleted successsfully')

    },
    onError: () => {
      toast.error('Cabin could not be deleted')
    }
  })

  const toggleEdit = () => {
    setShowEditForm((prev) => !prev)
  }

  return (
    <li>
      <div>
        <div>
          <img src={image_url} alt="" className='w-full h-[300px] object-cover rounded-md' />
        </div>
        <div className='grid-cols-2 bg-red py-4'>
          <p className=' font-bold'>Name: <span className=' text-[#4B5563] pl-2 text-sm '>{name}</span></p>
          <p  className=' font-bold'>Capacity:<span className=' text-[#4B5563] text-sm pl-2 '>{max_capacity}</span></p>
          <p className=' font-bold'>Price: <span className=' text-[#4B5563] pl-2 text-sm '>${regular_price}</span></p>
          <p className=' font-bold'>Discount: <span className=' text-[#4B5563] pl-2 text-sm '>${discount}</span></p>
        </div>
        <div className='flex gap-3 items-center'>
          <button className=' flex items-center gap-3 bg-blue-600 text-white px-4 py-1 rounded-md' onClick={toggleEdit}>
            <HiOutlinePencil className=' text-sm'  />
            <span className='text-sm'>Edit</span>
          </button>
          <button className=' flex items-center gap-3 bg-red-600 text-white px-4 py-1 rounded-md' onClick={() => mutate(id)} disabled={isDeleting}>
            <HiOutlineTrash className=' text-sm' />
            <span className='text-sm'>Delete</span>
          </button>
        </div>
      </div>
      {showEditForm && <CabinForm cabin={cabin} id={id} toggleEdit={toggleEdit} /> }
    </li>
  )
}

export default CabinItem
/* eslint-disable react/prop-types */
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2'
import CabinForm from './CabinForm';
import Modal from './Modal';
import DeleteCabinWindow from './DeleteCabinWindow'

const CabinItem = ({ cabin }) => {

  const { name, image_url, regular_price, max_capacity, discount, id } = cabin

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
          <p className=' font-bold'>Discount: <span className=' text-[#4B5563] pl-2 text-sm '>{
            discount ? `$${discount}` : <span>&mdash;</span>
          }</span></p>
        </div>
        <div className='flex gap-3 items-center'>
          <Modal>
            <Modal.Open opens="edit-form">
              <button className=' flex items-center gap-3 bg-blue-600 text-white px-4 py-1 rounded-md'>
                <HiOutlinePencil className=' text-sm'  />
                <span className='text-sm'>Edit</span>
              </button>
            </Modal.Open>
            <Modal.Window name="edit-form">
            <CabinForm cabin={cabin}   /> 
            </Modal.Window>
            <Modal.Open>
              <button className=' flex items-center gap-3 bg-red-600 text-white px-4 py-1 rounded-md'>
              <HiOutlineTrash className=' text-sm' />
              <span className='text-sm'>Delete</span>
            </button>
            </Modal.Open>
            <Modal.Window>
              <DeleteCabinWindow id={id} />
            </Modal.Window>
          </Modal>
          
        </div>
      </div>
    </li>
  )
}

export default CabinItem
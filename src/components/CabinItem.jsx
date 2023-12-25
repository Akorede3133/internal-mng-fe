import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2'
import img from '../assets/bnb.webp'
import { HiDotsVertical } from 'react-icons/hi'
const CabinItem = () => {
  return (
    <li>
      <div>
        <img src={img} alt="" className='w-full h-[300px] object-cover rounded-md' />
      </div>
      <div className='grid-cols-2 bg-red py-4'>
        <p className=' font-bold'>Name: <span className=' text-[#4B5563] pl-2 text-sm '>002</span></p>
        <p  className=' font-bold'>Capacity:<span className=' text-[#4B5563] text-sm pl-2 '>2</span></p>
        <p className=' font-bold'>Price: <span className=' text-[#4B5563] pl-2 text-sm '>$350.00</span></p>
        <p className=' font-bold'>Discount: <span className=' text-[#4B5563] pl-2 text-sm '>$50.00</span></p>
      </div>
      <div className='flex gap-3 items-center'>
        <button className=' flex items-center gap-3 bg-blue-600 text-white px-4 py-1 rounded-md'>
          <HiOutlinePencil className=' text-sm' />
          <span className='text-sm'>Edit</span>
        </button>
        <button className=' flex items-center gap-3 bg-red-600 text-white px-4 py-1 rounded-md'>
          <HiOutlineTrash className=' text-sm' />
          <span className='text-sm'>Delete</span>
        </button>
      </div>
    </li>
  )
}

export default CabinItem
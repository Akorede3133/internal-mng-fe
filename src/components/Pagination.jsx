import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"
import { useSearchParams } from "react-router-dom"
import { PAGE_SIZE } from '../utils/constants'

const Pagination = ( { count }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let currentPage = +searchParams.get('page') || Number(searchParams.get('page')) + 1
  const pageCount = Math.ceil(count / PAGE_SIZE)

  const nextPage = () => {
    currentPage = currentPage < pageCount ? currentPage + 1 : currentPage
    setSearchParams((prevParams) => {
      prevParams.set('page', currentPage)
      return prevParams;
    })
  }
  const prevPage = () => {
    currentPage = currentPage === 1 ? currentPage :  currentPage - 1;
    setSearchParams((prevParams) => {
      prevParams.set('page', currentPage)
      return prevParams;
    })
  }
  console.log(currentPage);
  return (
    <div className=" flex justify-between items-center p-4">
      <p>
        Showing <span className=" text-gray-600 font-semibold">{ (currentPage - 1) * PAGE_SIZE + 1  }</span> to <span className=" text-gray-600 font-semibold">{currentPage < pageCount ? currentPage * PAGE_SIZE : count }</span> of <span className=" text-gray-600 font-semibold">{count}</span> results
      </p>
      <div className=" flex gap-6">
        <button className=" py-1 px-2 rounded-md flex font-semibold capitalize space-x-2  text-gray-600 items-center hover:bg-blue-600 hover:text-white" onClick={prevPage}>
          <HiChevronLeft />
          <span>previous</span>
        </button>
        <button className=" py-1 px-2 rounded-md flex font-semibold capitalize space-x-2  text-gray-600 items-center hover:bg-blue-600 hover:text-white" onClick={nextPage}>
          <span>next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Pagination
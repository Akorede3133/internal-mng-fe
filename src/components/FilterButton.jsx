import { useSearchParams } from "react-router-dom"

const FilterButton = ({ value, label }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeKey = searchParams.get('discount') || '';
  const handleClick = (value, key) => {

    setSearchParams((prevParams) => {
      if (value === '') {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value)
      }
      return prevParams;
    })
  }
  return (
    <button className={`${activeKey === value ? 'bg-blue-500 text-white' : 'bg-white text-gray-500'} capitalize bg-blue-60 text-white py-1 px-3 rounded-md text-sm`} onClick={() => handleClick(value, 'discount')}>{label}</button>
  )
}

export default FilterButton
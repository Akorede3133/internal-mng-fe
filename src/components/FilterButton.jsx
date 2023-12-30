import { useSearchParams } from "react-router-dom"

const FilterButton = ({ value, label, type }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeKey = searchParams.get(type) || '';
  const handleClick = (value, key) => {

    setSearchParams((prevParams) => {
      if (value === '') {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value)
      }
      if (searchParams.get("page"))
        prevParams.set('page', 1)
      return prevParams;
    })
  }
  return (
    <button className={`${activeKey === value && 'bg-blue-500 text-white'} text-gray-500 capitalize py-1 px-3 rounded-md text-sm`} onClick={() => handleClick(value, type)}>{label}</button>
  )
}

export default FilterButton
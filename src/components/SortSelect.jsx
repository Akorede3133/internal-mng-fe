import { useSearchParams } from "react-router-dom";

const SortSelect = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortParam = searchParams.get('sort_by') || '';
  const handleChange = (e, key) => {
    const { value } = e.target
    setSearchParams((prevParams) => {
      prevParams.set(key, value)
      return prevParams;
    })
  }
  return (
    <select value={sortParam} name="sort" id="sort" className="px-3 py-2 outline-blue-600 bg-white shadow-lg rounded-md cursor-pointer text-sm" onChange={(e) => handleChange(e,'sort_by')}>
      {
        options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
        ))
      }
    </select>
  )
}

export default SortSelect
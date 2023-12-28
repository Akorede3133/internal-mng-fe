import FilterButton from "./FilterButton"

const Filter = ( { options } ) => {
  return (
    <div className=" bg-white shadow-lg px-4 py-2 rounded-md">
      {
        options.map((option) => <FilterButton key={option.value} label={option.label} value={option.value} /> )
      }
      
    </div>
  )
}

export default Filter
import FilterButton from "./FilterButton"

const Filter = ( { options, type } ) => {
  return (
    <div className=" bg-white shadow-lg px-4 py-2 rounded-md">
      {
        options.map((option) => <FilterButton key={option.value} label={option.label} value={option.value} type={type} /> )
      }
      
    </div>
  )
}

export default Filter
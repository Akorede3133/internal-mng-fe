import SortSelect from "./SortSelect"

const Sort = ({ options }) => {
  // t.string "name"
  //   t.integer "max_capacity"
  //   t.integer "regular_price"
  //   t.integer "discount"
  //   t.text "description"
  return (
    <div>
      <SortSelect options={options} />
    </div>
  )
}

export default Sort
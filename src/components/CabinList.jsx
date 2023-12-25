import CabinItem from "./CabinItem"

const CabinList = () => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 ">
      <CabinItem />
      <CabinItem />
      <CabinItem />
      <CabinItem />
      <CabinItem />
    </ul>
  )
}

export default CabinList
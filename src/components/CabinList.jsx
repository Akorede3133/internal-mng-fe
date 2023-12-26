import CabinItem from "./CabinItem"
import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../services/apiCabins"

const CabinList = ( { toggleForm } ) => {
  const {isPending, isError, data: cabins, error} = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins
  })
  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>{error.message}</p>
  }
  return (
    <div>
       <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 ">
          {
            cabins.map((cabin) => <CabinItem key={cabin.id} cabin={cabin} toggleForm={toggleForm} />)
          }
      </ul>
    </div>
  )
}

export default CabinList
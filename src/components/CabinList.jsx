import CabinItem from "./CabinItem"
import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../services/apiCabins"
import { useSearchParams } from "react-router-dom"

const CabinList = () => {
  const [searchParams] = useSearchParams();
  const discountParam = searchParams.get('discount') || '';
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
  let cabinsToDisplay = cabins;
  if (discountParam === 'with-discount') {
    cabinsToDisplay = cabins.filter((cabin) => cabin.discount > 0)
  }
  if (discountParam === 'no-discount') {
    cabinsToDisplay = cabins.filter((cabin) => cabin.discount === 0)
  }
  
  return (
    <div>
       <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 ">
          {
            cabinsToDisplay.map((cabin) => <CabinItem key={cabin.id} cabin={cabin}  />)
          }
      </ul>
    </div>
  )
}

export default CabinList
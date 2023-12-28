import CabinItem from "./CabinItem"
import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../services/apiCabins"
import { useSearchParams } from "react-router-dom"

const CabinList = () => {
  const [searchParams] = useSearchParams();
  const discountParam = searchParams.get('discount') || '';
  const sortParam = searchParams.get('sort_by') || '';
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
  let filteredCabins = cabins;
  if (discountParam === 'with-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0)
  }
  if (discountParam === 'no-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0)
  }



  const [key, direction] = sortParam.split('-')
  const modifier = direction === 'asc' ? 1 : -1;
  console.log(key, direction);
  const sortedCabins = filteredCabins.sort((a, b) => {
    return (a['name'] - b['name']) * modifier;
  })

  
  return (
    <div>
       <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 ">
          {
            sortedCabins.map((cabin) => <CabinItem key={cabin.id} cabin={cabin}  />)
          }
      </ul>
    </div>
  )
}

export default CabinList
import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../services/apiBookings"
import { useSearchParams } from "react-router-dom";

export const useGetBookings = () => {
  const [searchParams] = useSearchParams();
  const filterBy = searchParams.get('status') || ''
  const filter = {field: 'status', value: filterBy}
  const {isPending, data, error} = useQuery({
    queryKey: ['bookings', filter],
    queryFn: () => getBookings(filter)
  });
  
  return { isPending, data, error };
}
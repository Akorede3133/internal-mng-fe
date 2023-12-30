import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../services/apiBookings"

export const useGetBookings = () => {
  const {isPending, data, error} = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings
  });
  
  return { isPending, data, error };
}
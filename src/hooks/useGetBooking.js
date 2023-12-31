import { useQuery } from "@tanstack/react-query"
import { getBooking } from "../services/apiBookings"

export const useGetBooking = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['booking'],
    queryFn: getBooking,
    retry: false
  })

  return { data, isPending, error }
}
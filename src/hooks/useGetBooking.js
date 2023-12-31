import { useQuery } from "@tanstack/react-query"
import { getBooking } from "../services/apiBookings"
import { useParams } from "react-router-dom"

export const useGetBooking = () => {
  const { id } = useParams();
  // console.log(id);
  const { data, isPending, error } = useQuery({
    queryKey: ['booking', id],
    queryFn: () => getBooking(id),
    retry: false
  })

  return { data, isPending, error }
}
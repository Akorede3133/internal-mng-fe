import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../services/apiBookings"
import { useSearchParams } from "react-router-dom";

export const useGetBookings = () => {
  const [searchParams] = useSearchParams();
  const filterBy = searchParams.get('status') || ''
  const filter = {field: 'status', value: filterBy}
  const sortValue = searchParams.get('sort_by') || 'start_date-desc';
  const [sortKey, direction] = sortValue.split('-');
  const sort = { field: 'sort_by', value: sortKey, direction  }

  const {isPending, data, error} = useQuery({
    queryKey: ['bookings', filter, sort],
    queryFn: () => getBookings(filter, sort)
  });
  
  return { isPending, data, error };
}
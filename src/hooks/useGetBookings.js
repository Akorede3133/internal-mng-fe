import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getBookings } from "../services/apiBookings"
import { useSearchParams } from "react-router-dom";

export const useGetBookings = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filterBy = searchParams.get('status') || ''
  const filter = {field: 'status', value: filterBy}
  const sortValue = searchParams.get('sort_by') || 'start_date-desc';
  const [sortKey, direction] = sortValue.split('-');
  const sort = { field: 'sort_by', value: sortKey, direction  }
  const page = +searchParams.get('page') || 1;
  const {isPending, data, error} = useQuery({
    queryKey: ['bookings', filter, sort, page],
    queryFn: () => getBookings(filter, sort, page)
  });

  const pageCount = data?.total_pages;
  console.log(pageCount);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sort, page + 1],
      queryFn: () => getBookings(filter, sort, page + 1)
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sort, page - 1],
      queryFn: () => getBookings(filter, sort, page - 1)
    });
  }
  
  return { isPending, data, error };
}
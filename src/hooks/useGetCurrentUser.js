import { useQuery } from "@tanstack/react-query"
import { getCurrentUser } from "../services/apiAuth"

export const useGetCurrentUser = () => {
  const { data: currentUser, isPending:isGettingUser, error } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    retry: false
  })
  return { currentUser, isGettingUser, error }
}
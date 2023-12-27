import { useQuery } from "@tanstack/react-query"
import { getSettings } from "../services/apiSettings"

export const useGetSettings = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings
  })

  return { isPending, data, error }
}
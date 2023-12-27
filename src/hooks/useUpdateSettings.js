import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { updateSettings } from "../services/apiSettings"
import toast from "react-hot-toast";

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, error, isPending: isUpdating } = useMutation({
    mutationFn: (data) => updateSettings(data),
    onSuccess: () => {
      toast.success('Settings updated sucessfully')
      queryClient.invalidateQueries({
        queryKey: ['settings']
      })
    },
    onError: () => {
      toast.error(error.message)
    }
  })

  return { updateSetting, isUpdating }
}
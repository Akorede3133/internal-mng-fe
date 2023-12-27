import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateCabin } from "../services/apiCabins"
import toast from "react-hot-toast"

export const useEditCabin = () => {
  const queryClient = useQueryClient()
  const { isPending: isEditing, mutate: editCabin } = useMutation({
    mutationFn: (data) => {
      updateCabin(data, data.id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['cabins']})
      toast.success('Cabin was edited sucessfuly')

    },
    onError: () => {
      toast.error('Cabin could not be edited')
    }
  })

  return { isEditing, editCabin }
}
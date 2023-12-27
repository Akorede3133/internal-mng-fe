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

      toast.success('Cabin was edited sucessfuly')
      queryClient.invalidateQueries({queryKey: ['cabins']})
    },
    onError: () => {
      toast.error('Cabin could not be edited')
    }
  })

  return { isEditing, editCabin }
}
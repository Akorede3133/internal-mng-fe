import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createCabin } from "../services/apiCabins"
import toast from "react-hot-toast"

export const useCreateCabin = () => {
  const queryClient = useQueryClient()
  const { isPending: isCreating, mutate: createNewCabin } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('Cabin was created sucessfuly')
      queryClient.invalidateQueries({queryKey: ['cabins']})
    },
    onError: () => {
      toast.error('Cabin could not be created')
    }
  })
  return { isCreating, createNewCabin }
}
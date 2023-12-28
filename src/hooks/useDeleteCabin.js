import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinFromDatabase } from "../services/apiCabins";
import toast from "react-hot-toast";

export const useDeleteCabin = () => {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinFromDatabase,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
      toast.success('Cabin deleted successsfully')

    },
    onError: () => {
      toast.error('Cabin could not be deleted')
    }
  })

  return { isDeleting, deleteCabin}
}
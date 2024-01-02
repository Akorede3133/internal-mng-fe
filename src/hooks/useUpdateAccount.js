import { useMutation } from "@tanstack/react-query"
import { UpdateAccount } from "../services/apiUpdateAccount"
import toast from "react-hot-toast"

export const useUpdateAccount = () => {
  const  { mutate: updateUserAccount, isPending: isUpdating} = useMutation({
    mutationFn: (data) => UpdateAccount(data),
    onSuccess: () => {
      toast.success('Account updated sucessfully');
    },
    onError: (error) => {
      toast.error(error.mesaage)
    }
  })
  return { updateUserAccount, isUpdating }
}
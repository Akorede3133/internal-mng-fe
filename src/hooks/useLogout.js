import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logout } from "../services/apiAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logoutUser, isPending:isLogingOut } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success('User successfylly logged out')
      queryClient.removeQueries();
      navigate('/login')
    },
    onError: () => {
      toast.error('Logged could not be logged out')
    }
  })
  return { logoutUser, isLogingOut }
}
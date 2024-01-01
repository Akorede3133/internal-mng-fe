import { useMutation } from "@tanstack/react-query"
import { login } from "../services/apiAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
  const navigate = useNavigate();
  const {  mutate: loginUser, isPending: isLogingin } = useMutation({
    mutationFn: (data) => login(data),
    onSuccess: () => {
      toast.success('User successfully logged in')
      navigate('/');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  })

  return { loginUser, isLogingin }
}
import { useMutation } from "@tanstack/react-query"
import { signUp } from "../services/apiAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useSignUp = () => {
  const navigate = useNavigate();
  const {mutate: signUpUser, isSigningUp } = useMutation({
    mutationFn: (data) => signUp(data),
    onSuccess: () => {
      toast.success('User sucessfully signed up');
      navigate('/')
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  return { signUpUser, isSigningUp }
}
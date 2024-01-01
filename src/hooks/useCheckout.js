import { useMutation, useQueryClient } from "@tanstack/react-query"
import { checkout } from "../services/apiBookings"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

export const useCheckout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkoutBooking, isPending: isCheckingout, error } = useMutation({
    mutationFn: ({ id, data }) =>  checkout(id, data),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} sucessfully checked out`);
      queryClient.invalidateQueries({ active: true })
      navigate(`/booking/${data.id}`)
    },
    onError: () => {
      toast.error('Booking could not be checked out')
    }
  })
  
  return { checkoutBooking, isCheckingout }
}
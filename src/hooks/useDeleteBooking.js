import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBooking } from "../services/apiBookings"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteBookingApi, isPending: isDeleting, error } = useMutation({
    mutationFn: (id) => deleteBooking(id),
    onSuccess: () => {
      toast.success('Booking sucessfully deleted')
      queryClient.invalidateQueries({ active: true })
      navigate('/bookings')
    },
    onError: () => {
      toast.error(error.message)
    }
  })
  return { deleteBookingApi, isDeleting }
}
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { checkin } from "../services/apiBookings"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export const useCheckin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: checkinBooking, isPending:isCheckingin, error } = useMutation({
    mutationFn: ({ id, data }) => checkin(id, data),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} sucessfully checked in`)
      queryClient.invalidateQueries({ active: true })
      navigate('/bookings')
    },
    onError: () => {
      toast.error('Faild to checkin booking')
    }
  })
  return { checkinBooking, isCheckingin, error }
}
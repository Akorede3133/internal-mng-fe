const StatusTag = ({ status }) => {
  return (
    <p className={`text-[10px] w-[100px] py-1 px-2 rounded-full bg-[#E0F2FE] flex justify-center uppercase font-semibold items-center ${status === 'checked-in' && 'bg-green-200 text-green-600'} ${status === 'checked-out' && 'bg-gray-200 text-gray-600'} text-[#0397D1]`}>
    {status}
  </p>
  )
}

export default StatusTag
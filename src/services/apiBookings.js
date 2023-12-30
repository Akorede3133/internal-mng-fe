export const getBookings = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/bookings');
    if (!response.ok) throw new Error('Failed to get bookings');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
export const getBookings = async ({ field, value }) => {
  const BASE_URL = 'http://localhost:3000/api/v1/bookings'
  try {
    const response = await fetch(`${BASE_URL}?${field}=${value}`);
    if (!response.ok) throw new Error('Failed to get bookings');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
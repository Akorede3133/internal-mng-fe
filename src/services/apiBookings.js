const BASE_URL = 'http://localhost:3000/api/v1/bookings'

export const getBookings = async ({ field, value }, { field: sortField, value: sortValue, direction }, page) => {
  try {
    const response = await fetch(`${BASE_URL}?${field}=${value}&${sortField}=${sortValue}-${direction}&page=${page}`);
    if (!response.ok) throw new Error('Failed to get bookings');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getBooking = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Failed to get booking');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
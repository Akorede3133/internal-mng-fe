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

export const checkin = async (id, obj) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    });
    if (!response.ok) throw new Error('Failed to checkin booking');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
export const checkout = async (id, obj) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    });
    if (!response.ok) throw new Error('Failed to checkout booking');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
const BASE_URL = 'http://localhost:3000'

export const UpdateAccount = async (obj) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(obj)
    })

    if (!response.ok) {
        throw new Error('Account could not be updated')
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message)
  }

}

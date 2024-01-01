const BASE_URL = 'http://localhost:3000'

export const signUp = async (obj) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })

    if (response.ok) {
      localStorage.setItem('token', response.headers.get('Authorization'))
    } else {
      const error = await response.json();
      throw new Error(error.status.message)
    }
    const data = await response.json();
    return data;
    
  } catch (error) {
    throw new Error(error.message)
  }

}
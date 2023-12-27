export const getSettings = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/settings');
    if (!response.ok) throw new Error('Faild to fetch settings')

    const data = await response.json();
    return data;
    
  } catch (error) {
    throw new Error(error.message);
  }
}

export const updateSettings = async (setting) => {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/settings/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(setting)
    });
    if (!response.ok) throw new Error('Failed to update settings')

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
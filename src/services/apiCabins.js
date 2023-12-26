export const getCabins = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/cabins');
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const deleteCabin = async (id) => {
  try {
    const response = await fetch(`http://locallhost:3000/api/v1/cabins/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error("Failed to delete");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
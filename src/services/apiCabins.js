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
    const response = await fetch(`http://localhost:3000/api/v1/cabins/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error("Failed to delete");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const createCabin = async (data) => {
    const { name, max_capacity, regular_price, discount, description } = data;
    const image = data.image[0]
    const formData = new FormData();

    formData.append('cabin[name]', name)
    formData.append('cabin[max_capacity]', max_capacity)
    formData.append('cabin[regular_price]', regular_price)
    formData.append('cabin[discount]', discount)
    formData.append('cabin[description]', description)
    image && formData.append('cabin[image]', image)

  try {
    const response = await fetch(`http://localhost:3000/api/v1/cabins`, {
      method: 'POST',
      body: formData
    });
    if (!response.ok) throw new Error("Failed to create");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const updateCabin = async (editData, id) => {
  console.log(editData, id);
  const { name, max_capacity, regular_price, discount, description } = editData;
    const image = editData.image[0]
    console.log(image);
    const formData = new FormData();

    formData.append('cabin[name]', name)
    formData.append('cabin[max_capacity]', max_capacity)
    formData.append('cabin[regular_price]', regular_price)
    formData.append('cabin[discount]', discount)
    formData.append('cabin[description]', description)
   image && formData.append('cabin[image]', image)
  try {
    const response = await fetch(`http://localhost:3000/api/v1/cabins/${id}`, {
      method: 'PUT',
      body: formData
    });
    if (!response.ok) throw new Error("Failed to edit");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}


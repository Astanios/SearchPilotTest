import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";

export async function getItems() {
  try {
    const response = await axios.get("/products");
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getItem(id) {
  try {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function validate(id, name) {
  try {
    await axios.post(`/validate/${id ? id : ""}`, { name });
    alert("Name available");
  } catch (error) {
    console.error(error);
    alert("Name already in use");
  }
}

export async function putItem(id, data) {
  try {
    const response = id
      ? await axios.put(`/products/${id}`, data)
      : await axios.post(`/products`, data);
    alert(id ? "Item updated" : "Item created");
    return response.data;
  } catch (error) {
    alert(id ? "Error updating item" : "Error creating item");

    return error;
  }
}

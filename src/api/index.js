import axios from "axios";

// Add product
export const AddProduct = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/dashboard/create`,
      data,
      { withCredentials: true }
    );
    return response?.data;
  } catch (error) {
    console.log("Error in creating product", error.message);
    return null;
  }
};

// getAll products
export const getAllProducts = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/dashboard/all-products`
    );
    return response?.data;
  } catch (error) {
    console.log("Error in creating product", error.message);
    return null;
  }
};

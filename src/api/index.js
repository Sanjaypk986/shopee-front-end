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
    console.log("Error in fetching all products", error.message);
    return null;
  }
};

// delete product
export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}/dashboard/delete`,
      {
        data: { productId },
      }
    );
    return response;
  } catch (error) {
    console.log("Error in deleting product", error.message);
    return null;
  }
};

// update product
export const updateProduct = async (productId, quantity) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_API_URL}/dashboard/update`,
      {
        productId,
        quantity,
      }
    );
    return response;
  } catch (error) {
    console.log("Error in updating product", error.message);
    return null;
  }
};

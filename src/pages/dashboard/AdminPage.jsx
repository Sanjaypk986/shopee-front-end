import { useEffect, useRef, useState } from "react";
import CardForAdminPage from "../../components/CardForAdminPage";
import {
  AddProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../../api";
import toast from "react-hot-toast";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddproduct = async (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value,
      imageUrl: imageRef.current.value,
    };

    try {
      const response = await AddProduct(data);
      toast.success("Product Added successfully");
      if (response.success) {
        nameRef.current.value = "";
        priceRef.current.value = "";
        quantityRef.current.value = "";
        imageRef.current.value = "";
        setProducts((prevProducts) => [...prevProducts, response.data]);
      }
    } catch (error) {
      console.log(error);
      toast.error("Product Not Added");
    }
  };

  const handleUpdate = async (productId, quantity) => {
    try {
      const response = await updateProduct(productId, quantity);
      toast.success("Quantity Updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Product quantity not updated");
    }
  };
  const handleDelete = async (productId) => {
    //delete product
    try {
      const response = await deleteProduct(productId);
      toast.success("Product Deleted successfully");
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.log(error);
      toast.error("Product Not Deleted");
    }
  };

  return (
    <div className="min-h-screen container mx-auto lg:w-3/4">
      <h2 className="p-2 font-semibold text-gray-700 text-2xl text-center my-2">
        Products Management
      </h2>
      <section className="flex flex-col justify-start  my-4">
        <h3 className="p-2 font-semibold text-lg text-start">Add Products</h3>
        <form
          onSubmit={handleAddproduct}
          className="my-4 flex flex-wrap gap-4 justify-start"
        >
          <input
            type="text"
            ref={nameRef}
            placeholder="Product Name"
            className="border rounded-md px-3 py-2 w-full sm:w-auto"
            required
          />
          <input
            ref={priceRef}
            type="number"
            placeholder="Price"
            className="border rounded-md px-3 py-2 w-full sm:w-auto"
            required
          />
          <input
            ref={quantityRef}
            type="number"
            placeholder="Quantity"
            className="border rounded-md px-3 py-2 w-full sm:w-auto"
            required
          />
          <input
            ref={imageRef}
            type="text"
            placeholder="Image URL"
            className="border rounded-md px-3 py-2 w-full sm:w-auto"
          />
          <button
            type="submit"
            className="btn border px-5 py-2 rounded-md text-white bg-blue-900 hover:bg-blue-950"
          >
            Add Product
          </button>
        </form>
      </section>

      <section className="my-4">
        <h3 className="p-2 font-semibold text-lg text-start">
          Available Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products?.map((product) => (
            <CardForAdminPage
              key={product._id}
              product={product}
              updateProduct={handleUpdate}
              deleteProduct={handleDelete}
            />
          ))}
        </div>
      </section>

      <section className="my-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-bold text-xl text-gray-700 mb-6 text-center">
          Sales Overview
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-gray-600">Total Products</p>
            <p className="text-3xl font-semibold text-blue-900">
              {products ? products.length : "0"}
            </p>
          </div>
          <div className="flex flex-col items-center bg-green-100 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-gray-600">Total Sales</p>
            <p className="text-3xl font-semibold text-green-900">$60,834</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;

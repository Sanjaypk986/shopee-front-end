import CardForAdminPage from "../components/CardForAdminPage";

const AdminPage = () => {
  return (
    <div className="min-h-screen container mx-auto lg:w-3/4">
      <h2 className="p-2 font-semibold text-gray-700 text-2xl text-center my-2">
        Products Management
      </h2>
      <section className="flex flex-col justify-start  my-4">
        <h3 className="p-2 font-semibold text-lg text-start">Add Products</h3>
        <form action="" className="my-4 flex flex-wrap gap-4 justify-start">
          <input
            type="text"
            placeholder="Product Name"
            className="border rounded-md px-3 py-2 w-full sm:w-auto"
          />
          <input
            type="number"
            placeholder="Price"
            className="border rounded-md px-3 py-2 w-full sm:w-auto"
          />
          <input
            type="number"
            placeholder="Quantity"
            className="border rounded-md px-3 py-2 w-full sm:w-auto"
          />
          <input
            type="text"
            placeholder="Image URL"
            className="border rounded-md px-3 py-2 w-full sm:w-auto"
          />
          <button className="btn border px-5 py-2 rounded-md text-white bg-blue-900 hover:bg-blue-950">
            Add Product
          </button>
        </form>
      </section>

      <section className="my-4">
        <h3 className="p-2 font-semibold text-lg text-start">
          Available Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <CardForAdminPage />
          <CardForAdminPage />
          <CardForAdminPage />
          <CardForAdminPage />
          <CardForAdminPage />
        </div>
      </section>
      <section className="my-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-bold text-xl text-gray-700 mb-6 text-center">
          Sales Overview
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow-sm">
            <p className="text-lg font-medium text-gray-600">Total Products</p>
            <p className="text-3xl font-semibold text-blue-900">25</p>
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

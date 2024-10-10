
const CardForAdminPage = () => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
    <div className="flex justify-center mb-3">
      <img src="https://m.media-amazon.com/images/I/61uwxU6TRGL._AC_UL320_.jpg" alt="Product Image" className="h-32 w-full object-cover" />
    </div>
    <div className="flex flex-col gap-2">
      <h5 className="font-semibold text-center">Product Name</h5>
      <div className="flex justify-between items-center">
        <p className="font-medium">Qty:</p>
        <p>100</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium">Price:</p>
        <p>100</p>
      </div>
    </div>
    <div className="flex justify-between mt-4">
      <button className="px-4 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700">Edit</button>
      <button className="px-4 py-1 text-white bg-red-600 rounded-md hover:bg-red-700">Delete</button>
    </div>
  </div>
  )
}

export default CardForAdminPage
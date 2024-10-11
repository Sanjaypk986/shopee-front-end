import React from "react";
const CardForAdminPage = ({product}) => {
  
  return (
    <div className="border p-4 rounded-lg shadow-md">
    <div className="flex justify-center mb-3">
      <img src={product.imageUrl} alt={product.name} className="h-32 w-full object-cover" />
    </div>
    <div className="flex flex-col gap-2">
      <h5 className="font-semibold text-center">{product.name}</h5>
      <div className="flex justify-between items-center">
        <p className="font-medium">Qty:</p>
        <p>{product.quantity}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-medium">Price:</p>
        <p>{product.price}</p>
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
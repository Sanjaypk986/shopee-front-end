import axios from "axios";
import "./Card.css";
import toast from "react-hot-toast";


const Card = ({ title, price, imageUrl,id ,stock}) => {

  const handleAddToCart = async (id) => {
    try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/cart/add-cart`,
      {productId : id, quantity : 1})
      if(response.data.success) {
        toast.success("Item added to cart")
      }
    console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="card-container">
      {/* Image Section */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="card-image"
        />
      )}

      {/* Card Content */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">Price : ₹{price}</p>
        <p className="card-description">Stock : {stock}</p>

        <button
          className="add-button" onClick={()=>handleAddToCart(id)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;

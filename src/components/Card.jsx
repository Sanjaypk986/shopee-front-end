import React from "react";
import "./Card.css";

const Card = ({ title, price, imageUrl, onAdd }) => {
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
        <p className="card-description">{price}</p>

        <button
          className="add-button" onClick={onAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;

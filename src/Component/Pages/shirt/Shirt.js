import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import "../product.css";

const Shirt = () => {
  const shirtData = useSelector((state) => state.items.shirtData);

  return (
    <div className="product-container">
      {shirtData.map((shirt) => (
        <Card
          key={shirt.id}
          imageUrl={shirt.imageUrl}
          title={shirt.name}
          description={shirt.description}
          className="product-card"
        />
      ))}
    </div>
  );
};

export default Shirt;

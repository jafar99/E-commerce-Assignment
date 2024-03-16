import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import "../product.css";

const Earphones = () => {
  const earphonesData = useSelector((state) => state.items.earphonesData);

  return (
    <div className="product-container">
      {earphonesData.map((earphones) => (
        <Card
          key={earphones.id}
          imageUrl={earphones.imageUrl}
          title={earphones.name}
          description={earphones.description}
          className="product-card"
        />
      ))}
    </div>
  );
};

export default Earphones;

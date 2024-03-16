import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import "../product.css";

const Mac = () => {
  const macData = useSelector((state) => state.items.macData);

  return (
    <div className="product-container">
      {macData.map((mac) => (
        <Card
          key={mac.id}
          imageUrl={mac.imageUrl}
          title={mac.name}
          description={mac.description}
          className="product-card"
        />
      ))}
    </div>
  );
};

export default Mac;

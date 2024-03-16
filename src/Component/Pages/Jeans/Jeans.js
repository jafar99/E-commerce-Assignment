// Jeans.js
import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import "../product.css";

const Jeans = () => {
  const jeansData = useSelector((state) => state.items.jeansData);

  return (
    <div className="product-container">
      {jeansData.map((jeans) => (
        <Card
          key={jeans.id}
          imageUrl={jeans.imageUrl}
          title={jeans.name}
          description={jeans.description}
          className="product-card"
        />
      ))}
    </div>
  );
};

export default Jeans;

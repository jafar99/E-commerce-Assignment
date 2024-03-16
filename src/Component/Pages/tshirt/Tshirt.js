import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import "../product.css";

const Tshirt = () => {
  const tshirtData = useSelector((state) => state.items.tshirtData);

  return (
    <div className="product-container">
      {tshirtData.map((tshirt) => (
        <Card
          key={tshirt.id}
          imageUrl={tshirt.imageUrl}
          title={tshirt.name}
          description={tshirt.description}
          className="product-card"
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default Tshirt;

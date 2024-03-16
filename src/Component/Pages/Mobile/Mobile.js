import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import "../product.css";

const Mobile = () => {
  const mobileData = useSelector((state) => state.items.mobileData);

  return (
    <div className="product-container">
      {mobileData.map((mobile) => (
        <Card
          key={mobile.id}
          imageUrl={mobile.imageUrl}
          title={mobile.name}
          description={mobile.description}
          className="product-card"
        />
      ))}
    </div>
  );
};

export default Mobile;

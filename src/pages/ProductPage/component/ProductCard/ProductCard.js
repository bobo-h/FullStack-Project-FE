import React from "react";
import { Col } from "react-bootstrap";

const ProductCard = ({ item, handleOpenPaymentModal }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={2} className="d-flex justify-content-center mb-4">
      <div className="product-card" onClick={() => handleOpenPaymentModal(item)}>
        <img src={item.imageUrl} alt={item.name} className="img-fluid" style={{ cursor: "pointer" }} />
        <h5>{item.name}</h5>
      </div>
    </Col>
  );
};

export default ProductCard;

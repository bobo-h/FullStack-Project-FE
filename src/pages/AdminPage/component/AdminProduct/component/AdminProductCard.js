import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../style/adminProduct.style.css"; 
import Button2 from '../../../../../common/components/Button2';

const ProductCard = () => {
  return (
    <div className='product-table-content'>
      <Container>
        <Row className="mb-4">
          <Col md={1} className="d-flex align-items-center">
            1
          </Col>
          <Col md={2} className="d-flex align-items-center">
            이미지
          </Col>
          <Col md={2} className="d-flex align-items-center">
            까만고양이
          </Col>
          <Col md={3} className="d-flex align-items-center">
            깜깜한 밤처럼 어두운 색의 고양이
          </Col>
          <Col md={1} className="d-flex align-items-center">
            1,000
          </Col>
          <Col md={3} className="d-flex align-items-center justify-content-center">
            <Button2>수정</Button2>
            <Button2>삭제</Button2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductCard;

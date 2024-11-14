import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ProductTable from './component/AdminProductTable';
import Button from '../../../../common/components/Button';
import ProductCard from './component/AdminProductCard';

const AdminProductComponent = () => {
  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <div className="admin-product-page">
      <Container>
        <Row>
          <Col md={2}>
            <h2>Product</h2>
          </Col>
          <Col  md={3}>
            <Form.Select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option>고양이</option>
              <option>배경지</option>
            </Form.Select>
          </Col>
          <Col  md={7} className='text-end'>
            <Button>add Item</Button>
          </Col>
        </Row>
        <Row>
          <ProductTable />
          <ProductCard/>
        </Row>
      </Container>
    </div>
  );
};

export default AdminProductComponent;

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ProductTable from './component/AdminProductTable';
import Button from '../../../../common/components/Button';
import ProductCard from './component/AdminProductCard';
import NewProductDialog from './component/NewProductDialog';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct, getProductList } from '../../../../features/product/productSlice';

const AdminProduct = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.product.productList);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const [mode, setMode] = useState("new");
  const [showDialog, setShowDialog] = useState(false);

  const handleClickNewItem = () => {
    //new 모드로 설정하고
    setMode("new")

    //selectedProduct 는 null로
    dispatch(setSelectedProduct(null));

    // 다이얼로그 열어주기
    setShowDialog(true);

  };

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <div className="admin-product-page">
      <Container>
        <Row>
          <Col md={2}>
            <h2>Product</h2>
          </Col>
          <Col md={3}>
            <Form.Select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option>고양이</option>
              <option>배경지</option>
            </Form.Select>
          </Col>
          <Col md={7} className='text-end'>
            <Button onClick={handleClickNewItem}>add Item</Button>
          </Col>
        </Row>
        <Row className="table-area">
          <ProductTable className="unser-line" />
          {productList.map((product) => (
            <ProductCard 
              key={product.id}
              product={product} // 개별 `product` 객체를 `ProductCard`에 전달
              setMode={setMode}
              setShowDialog={setShowDialog}
            />
          ))}
        </Row>
      </Container>
      <NewProductDialog
        mode={mode}
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        selectedProduct={selectedProduct} // Redux에서 가져온 `selectedProduct`를 다이얼로그에 전달
      />
    </div>
  );
};

export default AdminProduct;

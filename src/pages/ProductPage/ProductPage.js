import React, { useEffect, useState } from "react";
import { Row, Col, Container, Spinner, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../features/product/productSlice.js";
import PaymentPage from "../PaymentPage/PaymentPage.js";

const ProductPage = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product.productList || []);
    const [loading, setLoading] = useState(true);
    const [showPaymentModal, setShowPaymentModal] = useState(false); // 결제 모달 표시 상태 추가
    const [selectedProduct, setSelectedProduct] = useState(null); // 선택한 상품 정보

    //상품리스트 가져오기
    useEffect(() => {
        setLoading(true);
        dispatch(getProductList()).then(() => {
            setLoading(false);
        });
    }, [])

    // 결제 모달 열기
    const handleOpenPaymentModal = (product) => {
        setSelectedProduct(product);
        setShowPaymentModal(true);
    };

    // 결제 모달 닫기
    const handleClosePaymentModal = () => {
        setShowPaymentModal(false);
        setSelectedProduct(null);
    };

    return (
        <Container>

            <Row>

                {loading ? (
                    // 로딩 상태일 때 스피너 표시
                    <div className="text-align-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>

                    // 상품 있으면 보여주고, 없으면 없다고 표시 
                ) : productList.length > 0 ? (

                    productList.map((item) => (
                        <Col md={3} sm={12} key={item.id}>
                            <div className="product-card" onClick={() => handleOpenPaymentModal(item)}>
                                <img src={item.imageUrl} alt={item.name} className="img-fluid" style={{ cursor: "pointer" }} />
                                <h5>{item.name}</h5>
                            </div>
                        </Col>
                    ))
                ) : (
                    <div className="text-align-center empty-bag">
                        <h2>등록된 상품이 없습니다!</h2>
                    </div>
                )}

            </Row>

            {/* 결제 모달 */}
            <Modal show={showPaymentModal} onHide={handleClosePaymentModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>결제하기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PaymentPage selectedProduct={selectedProduct} /> {/* 선택한 상품 정보 전달 */}
                </Modal.Body>
            </Modal>

        </Container>
    );
};

export default ProductPage;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import PaymentForm from "./component/PaymentForm";
import "./style/paymentPage.style.css";
import { cc_expires_format } from "../../utils/number";
import { createOrder } from "../../features/order/orderSlice";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const { orderNum } = useSelector((state) => state.order);
  const [firstLoading, setFirstLoading] = useState(true);

  const [cardValue, setCardValue] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const [orderInfo, setOrderInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (firstLoading) {
      setFirstLoading(false); // useEffect가 처음에 호출될 때 오더 성공페이지로 넘어가지 않도록 처리 
    } else {

      // 오더번호를 받으면 어디로 갈까?
      if (orderNum !== "") {
        navigate("/chatbot")
      }
    }

  }, [orderNum]);


  const handleSubmit = (event) => {
    event.preventDefault();

    // 선택한 상품 정보를 사용하여 주문 생성
    dispatch(createOrder({
      productId: selectedProduct.id,
      price: selectedProduct.price,
      name: selectedProduct.name,
      imgUrl: selectedProduct.imageUrl,
    }));

  };

  const handleFormChange = (event) => {

    // 이름, 이메일 주소 입력 
    const { name, value } = event.target;
    setOrderInfo({ ...orderInfo, [name]: value }); // 입력 필드 업데이트
  };

  const handlePaymentInfoChange = (event) => {
    //카드정보 넣어주기
    const { name, value } = event.target;
    if (name === "expiry") {
      let newValue = cc_expires_format(value)
      setCardValue({ ...cardValue, [name]: newValue });
      return
    }
    setCardValue({ ...cardValue, [name]: value });
  };

  const handleInputFocus = (e) => {
    setCardValue({ ...cardValue, focus: e.target.name });
  };

  const proceedToPayment = () => {
    navigate("/chatbot")
  }

  const stopPayment = () => {
    navigate("/shop")
  }

  return (
    <Container fluid className="payment-page">
      <Row>
        {/* 고양이 카드 */}
        <Col lg={5}>
          <Row className="mb-4">
            {/* 상단 공백 */}
            <Col>
              <div style={{ height: "20px" }}></div>
            </Col>
          </Row>
          {selectedProduct ? (
            <div className="payment-product-card">
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                className="img-fluid product-image"
              />
            </div>
          ) : (
            <p>상품 정보를 불러올 수 없습니다.</p>
          )}
          <Row className="mt-3 justify-content-center text-center">
            {/* 결제 금액 표시 */}
            <Col>
              <h5>결제 금액: 1,000₩ </h5>
            </Col>
          </Row>
        </Col>

        {/* 구매자, 카드 정보 */}
        <Col lg={7}>
          <h4 >구매자 정보</h4>
          <Form onSubmit={handleSubmit}>
            {/* 구매자 이름 입력 */}
            <Row className="mb-3">
              <Form.Group as={Col} lg={6} controlId="buyer-name">
                <Form.Label>이름</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleFormChange}
                  required
                  name="name"
                  value={orderInfo.name}
                />
              </Form.Group>
            </Row>

            {/* 구매자 이메일 입력 */}
            <Row className="mb-3">
              <Form.Group as={Col} lg={6} controlId="email">
                <Form.Label>이메일</Form.Label>
                <Form.Control
                  type="email"
                  onChange={handleFormChange}
                  required
                  name="email"
                  value={orderInfo.email}
                  placeholder="example@example.com"
                />
              </Form.Group>
            </Row>

            {/* 구매자 전화번호 입력 */}
            <Row className="mb-3">
              <Form.Group as={Col} lg={6} controlId="phone-number">
                <Form.Label>전화번호</Form.Label>
                <Form.Control
                  type="tel"
                  onChange={handleFormChange}
                  required
                  name="phone-number"
                  value={orderInfo.phoneNumber}
                  placeholder="010-XXXX-XXXX"
                />
              </Form.Group>
            </Row>

            {/* 카드 정보 입력 폼 */}
            <h4 className="payment-title">카드 정보</h4>
            <PaymentForm
              cardValue={cardValue}
              handleInputFocus={handleInputFocus}
              handlePaymentInfoChange={handlePaymentInfoChange}
            />

            {/* 결제 버튼 */}
            <div className="text-center mt-4">
              <Button variant="primary" onClick={proceedToPayment} className="payment-button mx-2">
                결제하기
              </Button>
              <Button variant="secondary" onClick={stopPayment} className="cancel-button mx-2">
                취소
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import PaymentForm from "./component/PaymentForm";
import "./style/paymentPage.style.css";
import { cc_expires_format } from "../../utils/number";
import { createOrder } from "../../features/order/orderSlice";

const PaymentPage = ({ selectedProduct }) => {
  const dispatch = useDispatch();
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
    contact: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (firstLoading) {
      setFirstLoading(false); // useEffect가 처음에 호출될 때 오더 성공페이지로 넘어가지 않도록 처리 
    } else {

      // 오더번호를 받으면 어디로 갈까?
      if (orderNum !== "") {
        navigate("/payment/success")
      }

    }

  }, [orderNum]);


  const handleSubmit = (event) => {
    event.preventDefault();

    // 오더 생성하기 (TODO HERE!!)
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


  return (
    <Container>
      <Row>
        {/* Left column with product image */}
        <Col lg={5} className="product-image">
          {selectedProduct && (
            <>
              <img
                src={selectedProduct.imageUrl} // 선택한 상품 이미지 표시
                alt={selectedProduct.name}
                className="img-fluid"
              />
              <h5 className="mt-3">{selectedProduct.name}</h5> {/* 상품 이름 */}
            </>
          )}
        </Col>

        {/* Right column with buyer and card information */}
        <Col lg={7}>
          <h2 className="payment-title">구매자 정보</h2>
          <Form onSubmit={handleSubmit}>
            {/* 구매자 이름 입력 */}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="name">
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
              <Form.Group as={Col} controlId="email">
                <Form.Label>이메일</Form.Label>
                <Form.Control
                  type="email"
                  onChange={handleFormChange}
                  required
                  name="email"
                  value={orderInfo.email}
                />
              </Form.Group>
            </Row>

            {/* 구매자 전화번호 입력 */}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="contact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control
                  type="tel"
                  onChange={handleFormChange}
                  required
                  name="contact"
                  value={orderInfo.contact}
                />
              </Form.Group>
            </Row>

            {/* 카드 정보 입력 폼 */}
            <h2 className="payment-title">카드 정보</h2>
            <PaymentForm
              cardValue={cardValue}
              handleInputFocus={handleInputFocus}
              handlePaymentInfoChange={handlePaymentInfoChange}
            />

            {/* 결제 버튼 */}
            <Button variant="dark" className="payment-button pay-button mt-4" type="submit">
              결제하기
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;

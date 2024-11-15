import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form} from "react-bootstrap";
import ReactDOM from "react-dom";
import "./style/paymentModal.style.css";
import Button from "../../../../common/components/Button";
import Button2 from "../../../../common/components/Button2";


const PaymentModal = ({ selectedProduct, onClose, onProceedToPayment }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    const handleBackdropClick = (event) => {
        if (event.target.classList.contains("modal-backdrop")) {
            onClose();
        }
    };

    const ItemContent = (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <Container className="payment-modal-backdrop">
            <button className="modal-close-button" onClick={onClose}>X</button>
                <h5 className="modal-title">Meow Info</h5>
                <Row>
                    <Col>
                        <img 
                            src={selectedProduct.imageUrl} 
                            alt={selectedProduct.name} 
                            className="img-fluid" 
                            style={{ height: '50%', width: 'auto' }} 
                        />
                    </Col>
                    <Col>
                        <div>고양이 이름</div>
                        <div>고양이 설명</div>    
                    </Col>
                </Row>
                <Row>
                    <Col className="btn-gap">
                        <Button variant="primary" onClick={onProceedToPayment} className="payment-button">
                            결제하기
                        </Button>
                        <Button2 variant="secondary" onClick={onClose} className="cancel-button">
                            취소
                        </Button2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    return ReactDOM.createPortal(ItemContent, document.getElementById("root"));
};

export default PaymentModal;

import React, { useEffect } from "react";
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

    return ReactDOM.createPortal(
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-container">
                <div className="modal-header">
                    <h5 className="modal-title">입양하기(1000원)</h5>
                    <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                </div>
                <div className="modal-body text-center">
                    <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="img-fluid mb-3" />
                </div>
                <div className="modal-footer">
                    <Button variant="primary" onClick={onProceedToPayment} className="payment-button">
                        결제하기
                    </Button>
                    <Button2 variant="secondary" onClick={onClose} className="cancel-button">
                        취소
                    </Button2>
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default PaymentModal;

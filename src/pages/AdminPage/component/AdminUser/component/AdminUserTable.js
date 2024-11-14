import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../style/adminUser.style.css"; 

const UserTable = () => {
  return (
    <div className='user-table-name'>
      <Container >
        <Row className="mb-4">
          <Col md={1} className="d-flex align-items-center">
            <strong>#</strong>
          </Col>
          <Col md={3} className="d-flex align-items-center">
            <strong>이름</strong>
          </Col>
          <Col md={3} className="d-flex align-items-center">
            <strong>이메일</strong>
          </Col>
          <Col md={2} className="d-flex align-items-center">
            <strong>역할</strong>
          </Col>
          <Col md={3} className="d-flex align-items-center justify-content-center">
            <strong></strong>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserTable;

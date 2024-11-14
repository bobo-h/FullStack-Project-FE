import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../style/adminUser.style.css"; 
import Button2 from '../../../../../common/components/Button2';

const UserCard = () => {
  return (
    <div className='user-table-content'>
        <Container>
            <Row className="mb-4">
            <Col md={1} className="d-flex align-items-center">
                1
            </Col>
            <Col md={3} className="d-flex align-items-center">
                고영이는 귀여워
            </Col>
            <Col md={3} className="d-flex align-items-center">
                email@email.com
            </Col>
            <Col md={2} className="d-flex align-items-center">
                admin
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

export default UserCard;

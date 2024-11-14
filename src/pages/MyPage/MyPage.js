import React from "react";
import SidebarForMyPage from "./component/SidebarForMyPage";
import { Col, Container, Row } from "react-bootstrap";
import "./style/sidebarForMyPage.style.css";

const MyPage = () => {
  return (
    <div>
      <Container className="mypage-style">
        <Row className="vh-100">
          <Col xs={12} md={3} className="sidebar mobile-sidebar">
            <SidebarForMyPage />
          </Col>
          <Col xs={12} md={9} className="content">
            {/* 이 영역에 MyPage 컨텐츠 */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyPage;

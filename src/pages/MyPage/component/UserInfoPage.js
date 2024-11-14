import React, { useState } from "react";
import { Button, Form, Col, Row, Image, Container } from "react-bootstrap";

const UserInfoPage = () => {
  // 상태 변수 정의
  const [name, setName] = useState("홍길동");
  const [birthDate, setBirthDate] = useState("1990-01-01");
  const [profileImage, setProfileImage] = useState(null);

  // 프로필 사진 변경 핸들러
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // 미리보기 이미지 URL 생성
    }
  };

  // 정보 업데이트 핸들러
  const handleUpdate = () => {
    // 이름과 생일 업데이트 로직 추가 가능
    alert("유저 정보가 업데이트되었습니다!");
  };

  return (
    <Container className="user-info-page">
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={12} md={4} className="text-center">
          <Image
            src={profileImage || "https://via.placeholder.com/150"}
            roundedCircle
            width={150}
            height={150}
            alt="Profile"
          />
          <Form.Group controlId="formFile" className="mt-3">
            <Form.Label>프로필 사진 업로드</Form.Label>
            <Form.Control type="file" onChange={handleImageUpload} />
          </Form.Group>
        </Col>
        <Col xs={12} md={8}>
          <Form>
            <Form.Group as={Row} controlId="formName" className="mb-3">
              <Form.Label column sm={3}>
                이름
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formBirthDate" className="mb-3">
              <Form.Label column sm={3}>
                생일
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Button variant="primary" onClick={handleUpdate} className="mt-3">
              정보 업데이트
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfoPage;

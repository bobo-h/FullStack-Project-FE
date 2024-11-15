import React, { useEffect, useState } from "react";
import { Form, Col, Row, Image, Container } from "react-bootstrap";
import Button from "../../../common/components/Button";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../../common/components/Alert";
import { editUserInfo } from "../../../features/user/userSlice";

const UserInfo = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // 상태 변수 정의
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setBirthDate(user.birthday.slice(0, 10));
    }
  }, [user]);

  // 프로필 사진 변경 핸들러
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // 미리보기 이미지 URL 생성
    }
  };

  // 정보 업데이트 핸들러
  const handleUpdate = () => {
    if (isEditing) {
      // 업데이트 BE
      if (!name) {
        setAlertMessage("이름은 필수 입력 값입니다.");
        setShowAlert(true);
        return;
      }
      dispatch(
        editUserInfo({ id: user?._id, name, birthday: birthDate, profileImage })
      );
      setAlertMessage(`${name}님의 정보가 성공적으로 수정되었습니다!`);
      setShowAlert(true);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="user-info-page">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} md={4} className="text-center">
            <Image
              src={profileImage || "https://via.placeholder.com/150"}
              roundedCircle
              width={150}
              height={150}
              alt="Profile"
            />
            {isEditing ? (
              <Form.Group controlId="profileImage" className="mt-3">
                <Form.Label>프로필 사진 업로드</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
              </Form.Group>
            ) : (
              ""
            )}
          </Col>
          <Col xs={12} md={8} className="userInfo-form-style">
            <Form>
              <Form.Group as={Row} controlId="name" className="mb-3">
                <Form.Label column sm={3}>
                  이름
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="text"
                    value={name}
                    disabled={!isEditing}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="birthday" className="mb-3">
                <Form.Label column sm={3}>
                  생일
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="date"
                    value={birthDate}
                    disabled={!isEditing}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </Col>
              </Form.Group>
              <div className="userInfo-form__btnList">
                <Button
                  onClick={handleUpdate}
                  className="userInfo-form__btn__modify"
                >
                  {isEditing ? "수정 완료" : "회원정보 수정"}
                </Button>
                <Button className="userInfo-form__btn__delete">회원탈퇴</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>{alertMessage}</Alert>
      )}
    </div>
  );
};

export default UserInfo;

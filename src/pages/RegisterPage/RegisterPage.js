import React from "react";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./style/resgister.style.css";
import CloudinaryUploadWidget from "../../utils/CloudinaryUploadWidget";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../features/user/userSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
    policy: false,
  });

  const [passwordError, setPasswordError] = useState("");
  const [policyError, setPolicyError] = useState(false);

  const register = (event) => {
    event.preventDefault();
    const {
      email,
      name,
      password,
      confirmPassword,
      birthday,
      profileImage,
      policy,
    } = formData;

    const checkConfirmPassword = password === confirmPassword;
    if (!checkConfirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!policy) {
      setPolicyError(true);
      return;
    }

    setPasswordError("");
    setPolicyError(false);

    // API 호출
    dispatch(
      registerUser({ name, email, password, birthday, profileImage, navigate })
    );
  };

  const handleChange = (event) => {
    event.preventDefault();
    let { id, type, value, checked } = event.target;
    if (id === "confirmPassword" && passwordError) setPasswordError("");
    if (type === "checkbox") {
      if (policyError) setPolicyError(false);
      setFormData((preState) => ({ ...preState, [id]: checked }));
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  // 이미지 업로드
  const uploadImage = (url) => {
    //이미지 업로드
    setFormData({ ...formData, profileImage: url });
  };

  return (
    <Container className="register-area">
      <Form onSubmit={register}>
        <Form.Group className="mb-3">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="이메일을 입력해주세요"
            onChange={handleChange}
            required
            className="email-form-style"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            id="name"
            placeholder="이름을 입력해주세요"
            onChange={handleChange}
            required
            className="name-form-style"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>생년월일</Form.Label>
          <Form.Control
            type="date"
            id="birthday"
            placeholder="생년월일을 입력해주세요"
            onChange={handleChange}
            required
            className="birthday-form-style"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={handleChange}
            required
            className="password-form-style"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>비밀번호 재확인</Form.Label>
          <Form.Control
            type="password"
            id="confirmPassword"
            placeholder="비밀번호 재확인"
            onChange={handleChange}
            required
            isInvalid={passwordError}
            className="confirmpassword-form-style"
          />
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <div className="form-label-container">
            <Form.Label>프로필 사진</Form.Label>
          </div>
          <CloudinaryUploadWidget
            className="cloudinary-style"
            uploadImage={uploadImage}
          />
          <img
            id="uploadedimage"
            src={formData.profileImage}
            className="upload-image-style"
            alt="uploadedimage"
          ></img>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="이용약관에 동의합니다"
            id="policy"
            onChange={handleChange}
            isInvalid={policyError}
            className="policy-style"
          />
        </Form.Group>
        <Button variant="danger" type="submit" className="submin-btn-style">
          회원가입
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;

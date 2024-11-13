import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createChatbot } from '../../features/chatbot/chatbotSlice';
import "./style/chatbot.style.css";

// ChatbotCreation 컴포넌트
const ChatbotCreation = () => {
  const [name, setName] = useState('');
  const [personality, setPersonality] = useState('');

  const dispatch = useDispatch();

  const { loading, registrationError, success } = useSelector((state) => state.chatbot); 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createChatbot({ name, personality }));
  };


  return (
    <div className='chatbot-create-modal'>
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Row className="text-center">
                <Col>
                <img 
                    src="https://img.freepik.com/premium-vector/cute-white-cat-walking-cartoon-vector-illustration_42750-814.jpg?w=740" 
                    alt="Cute Cat" 
                    style={{ width: '200px', marginBottom: '20px' }} 
                />

                {registrationError && <Alert variant="danger">{registrationError}</Alert>}
                {success && <Alert variant="success">챗봇이 성공적으로 생성되었습니다!</Alert>}
                
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>챗봇 이름</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="이름을 입력하세요"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPersonality">
                    <Form.Label>챗봇 성격</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="성격을 입력하세요"
                        value={personality}
                        onChange={(e) => setPersonality(e.target.value)}
                        required
                    />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? '생성 중...' : '챗봇 생성'}
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    </div>
    
  );
};

export default ChatbotCreation;
import React from 'react';
import { Button } from 'react-bootstrap';

const PersonalityBtn = ({ onPersonalitySelect }) => {
    const personalities = [
        'ISFP', 'ENTP', 'INFJ', 'INTP', 'ENFJ', 'INFP', 'ISTJ', 'ISFJ',
        'ESTP', 'ESFP', 'ENTJ', 'INTJ', 'ESTJ', 'ESFJ', 'ISFP', 'ENFP'
      ];
      

  return (
    <div className="d-flex flex-wrap">
      {personalities.map((personality, index) => (
        <Button 
          key={index}
          variant="outline-primary" 
          onClick={() => onPersonalitySelect(personality)} 
          className="m-2"
        >
          {personality}
        </Button>
      ))}
    </div>
  );
};

export default PersonalityBtn;

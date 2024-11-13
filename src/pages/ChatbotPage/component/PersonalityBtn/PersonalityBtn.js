import React from 'react';
import { Button } from 'react-bootstrap';

const PersonalityBtn = ({ onPersonalitySelect }) => {
  const personalities = ['친절한', '유머있는', '논리적인', '감성적인'];

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

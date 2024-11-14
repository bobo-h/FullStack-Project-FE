import React from 'react';
import "./style/adminMenu.style.css";
import { Row } from 'react-bootstrap';

const AdminMenu = ({ setSelectedComponent, selectedComponent }) => {
  return (
    <div className='admin-menubar'>
      <div className='titles'>
        <h3 className='project-title'>프로젝트</h3>
        <h4 className='project-subtitle'>Admin Page</h4>
      </div>
      <Row className="button-container">
        <button
          className={`admin-button ${selectedComponent === 'products' ? 'active' : ''}`}
          onClick={() => setSelectedComponent('products')}
        >
          Products
        </button>
        <button
          className={`admin-button ${selectedComponent === 'users' ? 'active' : ''}`}
          onClick={() => setSelectedComponent('users')}
        >
          Users
        </button>
        <button
          className={`admin-button ${selectedComponent === 'payment' ? 'active' : ''}`}
          onClick={() => setSelectedComponent('payment')}
        >
          Payment
        </button>
        <button
          className={`admin-button ${selectedComponent === 'diary' ? 'active' : ''}`}
          onClick={() => setSelectedComponent('diary')}
        >
          Diary
        </button>
      </Row>
      <Row md={7} className='text-end button-container'>
        <button
          className={`admin-button ${selectedComponent === 'home' ? 'active' : ''}`}
          onClick={() => setSelectedComponent('home')}
        >
          Home
        </button>
      </Row>
    </div>
  );
};

export default AdminMenu;

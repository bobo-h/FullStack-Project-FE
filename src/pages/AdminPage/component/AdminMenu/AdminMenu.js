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
      </Row>
    </div>
  );
};

export default AdminMenu;

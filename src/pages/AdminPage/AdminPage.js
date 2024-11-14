import React, { useState } from 'react';
import "./style/admin.style.css";
import AdminProduct from './component/AdminProduct/AdminProduct'; 
import AdminUser from './component/AdminUser/AdminUser';
import AdminMenu from './component/AdminMenu/AdminMenu';


const AdminPage = () => {
  const [selectedComponent, setSelectedComponent] = useState('products');

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'products':
        return <AdminProduct/>;
      case 'users':
        return <AdminUser/>;
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-menu">
        <AdminMenu 
          setSelectedComponent={setSelectedComponent} 
          selectedComponent={selectedComponent} 
        />
      </div>
      <div className="admin-content">
        {renderSelectedComponent()}
      </div>
    </div>
  );
};

export default AdminPage;

import React, { useState } from 'react';
import "./style/admin.style.css";
import AdminProductComponent from './component/AdminProduct/AdminProductComponent'; 
import AdminUserComponent from './component/AdminUser/AdminUserComponent';
import AdminMenu from './component/AdminMenu/AdminMenu';


const AdminPage = () => {
  const [selectedComponent, setSelectedComponent] = useState('products');

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'products':
        return <AdminProductComponent/>;
      case 'users':
        return <AdminUserComponent/>;
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

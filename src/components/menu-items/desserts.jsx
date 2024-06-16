import React from 'react';
import menubg from '../../assets/menu-images/menubg_fin.jpg';
import menuData from './menu.json';

const DessertMenu = () => {
  const desserts = menuData.menu.Desserts;

  const renderDessertCards = () => {
    return desserts.map((dessert, index) => (
      <div key={index} className="menu-item">
        <h3>{dessert["Food Item"]}</h3>
        <p className='p1'>Price: {dessert.Price}</p>
        {dessert.Calories && <p>Calories: {dessert.Calories}</p>}
        <p className='p1'>Description: {dessert.Description}</p>
      </div>
    ));
  };

  return (
    <div className="menu-container1" style={{ backgroundImage: `url(${menubg})` }}>
      <div className="menu-items">
        {renderDessertCards()}
      </div>
    </div>
  );
};

export default DessertMenu;

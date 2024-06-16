import React from 'react';
import menubg from '../../assets/menu-images/menubg_fin.jpg'; 
import menuData from './menu.json';

const SideMenu = () => {
    const Sides = menuData.menu.Sides;

    const renderSideCards = () => {
        return Sides.map((Side, index) => (
            <div key={index} className="menu-item">
                <h3>{Side["Food Item"]}</h3>
                <p className='p1'>Price: {Side.Price}</p>
                {Side.Calories && <p>Calories: {Side.Calories}</p>}
                <p className='p1'>Description: {Side.Description}</p>
            </div>
        ));
    };

    return (
        <div className="menu-container1" style={{backgroundImage: `url(${menubg})`}}>
            <div className="menu-items">
                {renderSideCards()}
            </div>
        </div>
    );
};

export default SideMenu;

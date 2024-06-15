import React from 'react';
import menubg from '../../assets/menu-images/menubg_fin.jpg'; 
import '../css/menu-item-css/beverages.css';
import beverageData from './menu.json';

const BeverageMenu = () => {
    const beverages = beverageData.menu.Beverages;

    // Function to generate beverage cards
    const renderBeverageCards = () => {
        return beverages.map((beverage, index) => (
            <div key={index} className="beverage-item">
                <h3>{beverage["Food Item"]}</h3>
                <p className='p1'>Price: {beverage.Price}</p>
                {beverage.Calories && <p>Calories: {beverage.Calories}</p>}
                <p className='p1'>Description: {beverage.Description}</p>
            </div>
        ));
    };

    return (
        <div className="menu-container1" style={{backgroundImage: `url(${menubg})`}}>
            {/* <img src={menubg} alt="" /> */}
            <div className="beverage-items">
                {renderBeverageCards()}
            </div>
        </div>
    );
};

export default BeverageMenu;

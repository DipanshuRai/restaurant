import React from 'react';
import menubg from '../../assets/menu-images/menubg_fin.jpg'; 
import menuData from './menu.json';

const BurgerMenu = () => {
    const burgers = menuData.menu.Burgers;

    const renderBurgerCards = () => {
        return burgers.map((burger, index) => (
            <div key={index} className="menu-item">
                <h3>{burger["Food Item"]}</h3>
                <p className='p1'>Price: {burger.Price}</p>
                {burger.Calories && <p>Calories: {burger.Calories}</p>}
                <p className='p1'>Description: {burger.Description}</p>
            </div>
        ));
    };

    return (
        <div className="menu-container1" style={{backgroundImage: `url(${menubg})`}}>
            <div className="menu-items">
                {renderBurgerCards()}
            </div>
        </div>
    );
};

export default BurgerMenu;

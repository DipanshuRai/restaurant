import React from 'react';
import menubg from '../../assets/menu-images/menubg_fin.jpg'; 
import menuData from './menu.json';

const SauceMenu = () => {
    const Sauces = menuData.menu.Sauces;

    const renderSauceCards = () => {
        return Sauces.map((Sauce, index) => (
            <div key={index} className="menu-item">
                <h3>{Sauce["Food Item"]}</h3>
                <p className='p1'>Price: {Sauce.Price}</p>
                {Sauce.Calories && <p>Calories: {Sauce.Calories}</p>}
                <p className='p1'>Description: {Sauce.Description}</p>
            </div>
        ));
    };

    return (
        <div className="menu-container1" style={{backgroundImage: `url(${menubg})`}}>
            <div className="menu-items">
                {renderSauceCards()}
            </div>
        </div>
    );
};

export default SauceMenu;

import React from 'react';
import menubg from '../../assets/menu-images/menubg_fin.jpg'; 
import menuData from './menu.json';

const TacoMenu = () => {
    const Tacos = menuData.menu.Tacos;

    const renderTacoCards = () => {
        return Tacos.map((Taco, index) => (
            <div key={index} className="menu-item">
                <h3>{Taco["Food Item"]}</h3>
                <p className='p1'>Price: {Taco.Price}</p>
                {Taco.Calories && <p>Calories: {Taco.Calories}</p>}
                <p className='p1'>Description: {Taco.Description}</p>
            </div>
        ));
    };

    return (
        <div className="menu-container1" style={{backgroundImage: `url(${menubg})`}}>
            <div className="menu-items">
                {renderTacoCards()}
            </div>
        </div>
    );
};

export default TacoMenu;

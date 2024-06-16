import React from 'react';
import menubg from '../../assets/menu-images/menubg_fin.jpg'; 
import menuData from './menu.json';

const WrapMenu = () => {
    const Wraps = menuData.menu.Wraps;

    const renderWrapCards = () => {
        return Wraps.map((Wrap, index) => (
            <div key={index} className="menu-item">
                <h3>{Wrap["Food Item"]}</h3>
                <p className='p1'>Price: {Wrap.Price}</p>
                {Wrap.Calories && <p>Calories: {Wrap.Calories}</p>}
                <p className='p1'>Description: {Wrap.Description}</p>
            </div>
        ));
    };

    return (
        <div className="menu-container1" style={{backgroundImage: `url(${menubg})`}}>
            <div className="menu-items">
                {renderWrapCards()}
            </div>
        </div>
    );
};

export default WrapMenu;

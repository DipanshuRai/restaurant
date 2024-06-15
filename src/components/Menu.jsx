import React, { useEffect, useState } from 'react';
import './css/Menu.css';

import coldCoffee from '../assets/menu-images/beverages/cold-coffee.jpg';
import hotChocolate from '../assets/menu-images/beverages/hot-chocolate.jpg';
import mangoSmoothie from '../assets/menu-images/beverages/mango-smoothie.webp';
import milkshake from '../assets/menu-images/beverages/milkshake.webp';
import softDrinks from '../assets/menu-images/beverages/soft-drinks.jpg';
import strawberrySmoothie from '../assets/menu-images/beverages/strawberry-smoothie.jpg';

import alooPaneerBurger from '../assets/menu-images/burger/aloo-paneer-burger.jpg';
import alooTikkiBurger from '../assets/menu-images/burger/aloo-tikki-burger.jpg';
import chickenTandooriBurger from '../assets/menu-images/burger/chicken-tandoori-burger.jpg';
import fishFiletBurger from '../assets/menu-images/burger/fish-filet-burger.jpg';
import gourmetMasalaVeggieBurger from '../assets/menu-images/burger/gourmet-masala-veggie-burger.jpg';
import paneerTikkaBurger from '../assets/menu-images/burger/panner-tikka-burger.jpg';
import royalMaharajaBurger from '../assets/menu-images/burger/royal-maharaja-burger.avif';
import spicyMuttonBurger from '../assets/menu-images/burger/spicy-mutton-burger.jpg';

import brownieSundae from '../assets/menu-images/desserts/brownie-sundae.jpg';
import cheesecake from '../assets/menu-images/desserts/cheesecake.jpeg';
import chocoLavaCake from '../assets/menu-images/desserts/choco-lava-cake.webp';
import chocolateChipCookie from '../assets/menu-images/desserts/chocolate-chip-cookie.webp';
import chocolateSundae from '../assets/menu-images/desserts/chocolate-sundae.webp';
import iceCream from '../assets/menu-images/desserts/ice-cream.avif';

import bbqSauce from '../assets/menu-images/sauces/BBQ-sauce.webp';
import chipotleMayo from '../assets/menu-images/sauces/chipotle-mayo.jpg';
import honeyMustard from '../assets/menu-images/sauces/honey-mustard.webp';
import ketchup from '../assets/menu-images/sauces/ketchup.jpg';
import mayonnaise from '../assets/menu-images/sauces/mayonaise.jpg';
import ranch from '../assets/menu-images/sauces/ranch.jpg';
import tandooriMayo from '../assets/menu-images/sauces/tandoori-mayo.jpg';

import cheeseBites from '../assets/menu-images/sides/cheese-bites.webp';
import chickenNuggets from '../assets/menu-images/sides/chicken-nuggets.jpg';
import fries from '../assets/menu-images/sides/fries.webp';
import onionRings from '../assets/menu-images/sides/onion-rings.jpg';

import chickenTaco from '../assets/menu-images/taco/chicken-taco.jpg';
import vegTaco from '../assets/menu-images/taco/veg-taco.jpg';

import chickenKebabWrap from '../assets/menu-images/wraps/chicken-kebab-wrap.avif';
import falafelWrap from '../assets/menu-images/wraps/falafel-wrap.jpg';
import paneerTikkaWrap from '../assets/menu-images/wraps/paneer-tikka-wrap.jpg';
import tandooriChickenWrap from '../assets/menu-images/wraps/tandoori-chicken-wrap.jpg';

import menubg from '../assets/menu-images/menubg_fin.jpg'; // Background image

const Menu = () => {
  const categories = ['beverages', 'burger', 'desserts', 'sauces', 'sides', 'taco', 'wraps'];
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryImages, setCategoryImages] = useState({
    beverages: [coldCoffee, hotChocolate, mangoSmoothie, milkshake, softDrinks, strawberrySmoothie],
    burger: [alooPaneerBurger, alooTikkiBurger, chickenTandooriBurger, fishFiletBurger, gourmetMasalaVeggieBurger, paneerTikkaBurger, royalMaharajaBurger, spicyMuttonBurger],
    desserts: [brownieSundae, cheesecake, chocoLavaCake, chocolateChipCookie, chocolateSundae, iceCream],
    sauces: [bbqSauce, chipotleMayo, honeyMustard, ketchup, mayonnaise, ranch, tandooriMayo],
    sides: [cheeseBites, chickenNuggets, fries, onionRings],
    taco: [chickenTaco, vegTaco],
    wraps: [chickenKebabWrap, falafelWrap, paneerTikkaWrap, tandooriChickenWrap]
  });
  const [recommendation, setRecommendation] = useState([]);

  const pickRandomCategory = () => {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    setSelectedCategory(randomCategory);
  };

  useEffect(() => {
    pickRandomCategory();
    const interval = setInterval(pickRandomCategory, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const randomRecImage =
        categoryImages[selectedCategory] &&
        categoryImages[selectedCategory][Math.floor(Math.random() * categoryImages[selectedCategory].length)];
      setRecommendation([{ category: selectedCategory, image: randomRecImage }]);
    }
  }, [selectedCategory, categoryImages]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="menu-container" style={{ backgroundImage: `url(${menubg})` }}>
      <div className="recommendation">
        {recommendation.map((item, index) => (
          <div key={index} className="recommended-item">
            <h3 className="tex">
              <u>
                <i>
                  <b>~~ WE SUGGEST ~~</b>
                </i>
              </u>
            </h3>
            <div className="recommended-image" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="newt">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</div>
            </div>
            <div className="belowText"><b>"</b>OUR DELICACIES<b>"</b></div>
          </div>
        ))}
      </div>
      <div className="menu">
        {categories.map((category) => (
          <div
            key={category}
            className={`category ${category} ${selectedCategory !== category && selectedCategory !== '' ? '' : 'hidden'}`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="category-content">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            </div>
            {category === 'beverages' && categoryImages.beverages && (
              <div className="beverage-image" style={{ backgroundImage: `url(${categoryImages.beverages[Math.floor(Math.random() * categoryImages.beverages.length)]})` }}></div>
            )}
            {category === 'desserts' && categoryImages.desserts && (
              <div className="dessert-image" style={{ backgroundImage: `url(${categoryImages.desserts[Math.floor(Math.random() * categoryImages.desserts.length)]})` }}></div>
            )}
            {categoryImages[category] && category !== 'beverages' && category !== 'desserts' && (
              <div
                className={`${category}-image`}
                style={{
                  backgroundImage: `url(${categoryImages[category][Math.floor(Math.random() * categoryImages[category].length)]})`
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

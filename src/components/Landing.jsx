import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider3 from './Forms/images/cak.jpeg'
import Slider2 from './Forms/images/bg.jpeg'
import Slider1 from '../assets/images/hero-slider-1.jpg'
import './css/landing.css';

const HeroSlider = () => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const heroSliderItems = [
    {
      img: Slider1,
      subtitle: "Tradational & Hygine",
      title: "For the love of delicious food",
      text: "Come with family & feel the joy of mouthwatering food",
    },
    {
      img: Slider2,
      subtitle: "delightful experience",
      title: "Flavors Inspired by the Seasons",
      text: "Come with family & feel the joy of mouthwatering food",
    },
    {
      img: Slider3,
      subtitle: "amazing & delicious",
      title: "Where every flavor tells a story",
      text: "Come with family & feel the joy of mouthwatering food",
    }
    // {
    //   img: Slider4,
    //   subtitle: "delightful experience",
    //   title: "Flavors Inspired by the Seasons",
    //   text: "Come with family & feel the joy of mouthwatering food",
    // }
  ];

  const updateSliderPos = (pos) => {
    setCurrentSlidePos(pos);
  };

  const slideNext = () => {
    const nextPos = currentSlidePos >= heroSliderItems.length - 1 ? 0 : currentSlidePos + 1;
    updateSliderPos(nextPos);
  };

  const slidePrev = () => {
    const prevPos = currentSlidePos <= 0 ? heroSliderItems.length - 1 : currentSlidePos - 1;
    updateSliderPos(prevPos);
  };

  

  useEffect(() => {
    const autoSlideInterval = setInterval(slideNext, 7000);
    return () => clearInterval(autoSlideInterval);
  }, [currentSlidePos]);

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider>
        {heroSliderItems.map((item, index) => (
          <li
            key={index}
            className={`slider-item ${index === currentSlidePos ? 'active' : ''}`}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <img src={item.img} width="1880" height="950" alt="" className="img-cover" />
            </div>
            <p className="label-2 section-subtitle slider-reveal">{item.subtitle}</p>
            <h1 className="display-1 hero-title slider-reveal">
              {item.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h1>
            <p className="body-2 hero-text slider-reveal">{item.text}</p>
            <a href="/Menu" className="center btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2" aria-hidden="true">View Our Menu</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HeroSlider;

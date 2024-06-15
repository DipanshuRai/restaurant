import React from 'react';
import burger from '../assets/menu-images/burger/burgurr.jpg';
import deserts from '../assets/images/service-1.jpg';
import drinks from '../assets/images/service-3.jpg';
import bg1 from '../assets/images/shape-1.png';
import bg2 from '../assets/images/shape-2.png';
import "./css/details.css"

const Details = () => {
  return (  
    <section className="section service bg-black-10 text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">Flavors For Royalty</p>
        <h2 className="headline-1 section-title">We Offer Top Notch</h2>
        <p className="section-text">
            Indulge in our delectable desserts, mouthwatering fast food, and refreshing drinks. 
            Visit us for a quick, delicious dining experience that satisfies every craving.
        </p>

        <ul className="grid-list">
          <li>
            <div className="service-card">
              <a href="/Menu" className="has-before hover:shine">
                  <img src={burger} width="285" height="336" loading="lazy" className="img-cover" />
              </a>
              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="/Menu">Breakfast</a>
                </h3>
                <a href="/Menu" className="btn-text hover-underline label-2">View Menu</a>
              </div>
            </div>
          </li>
          <li>
            <div className="service-card">
              <a href="/Menu" className="has-before hover:shine">
                  <img src={deserts} width="285" height="336" loading="lazy" className="img-cover" />
              </a>
              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="/Menu">Desserts</a>
                </h3>
                <a href="/Menu" className="btn-text hover-underline label-2">View Menu</a>
              </div>
            </div>
          </li>
          <li>
            <div className="service-card">
              <a href="#" className="has-before hover:shine">
                  <img src={drinks} width="285" height="336" loading="lazy" className="img-cover" />
              </a>
              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#">Drinks</a>
                </h3>
                <a href="#" className="btn-text hover-underline label-2">View Menu</a>
              </div>
            </div>
          </li>
        </ul>

        <img src={bg1} width="246" height="412" loading="lazy" className="shape shape-1 move-anim" />
        <img src={bg2} width="343" height="345" loading="lazy" className="shape shape-2 move-anim" />
      </div>
    </section>
  );
};

export default Details;

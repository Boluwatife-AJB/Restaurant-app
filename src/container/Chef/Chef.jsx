import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef-img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote-img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            optio sunt impedit, sint eaque libero modi? In excepturi expedita
            atque minima natus quibusdam eveniet qui?
          </p>
        </div>

        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          blanditiis.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign-img" />
      </div>
    </div>
  </div>
);

export default Chef;

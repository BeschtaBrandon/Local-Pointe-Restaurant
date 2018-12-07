import React from 'react';
import './AboutUs.css';

class AboutUs extends React.Component {

  render() {
    return <section id='about-us'>
      <div className='container'>
        <div className='row welcome-text'>
          <h2>Welcome to the <span>Local Pointe Restaurant & Bar</span></h2>
          <p>Great place to enjoy a few drinks and a variety of delicious foods.</p>
          <div className='button-read-more'>READ MORE</div>
        </div>
        <main>
        <div className='col-6 section-about-us'>
          <div className='about-us'><h4><a href='#'>About Us</a></h4><p>Rated over 4 stars <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> on Google Reviews!.</p><p className='read-more'><a>Read more...</a></p></div>
          <div id='menu' className='about-us'><h4><a href='#'>Our Menu</a></h4><p>Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue.</p><p className='read-more'><a>read more...</a></p></div>
          <div className='about-us about-us_recipes'><div className='about-us_photo'></div><div className='about-us_recipes-info'><h4><a href='#'>Our Recipes</a></h4><p>Ea dicit iudico persecuti qui, in debitis disputationi sed, regione omnesque eos in. Eu nec aeque partem deserunt, ad vel nullam numquam.</p></div></div>
          <div className='about-us'><h4><a href='#'>Location</a></h4><p>N1095 WI-16, Lyndon Station, WI 53944</p><p className='read-more'><a>read more...</a></p></div>
        </div>
        </main>
      </div>
    </section>
  }
}

export default AboutUs;

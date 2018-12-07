import React from 'react';
import './Footer.css';

class Footer extends React.Component {



  render() {
    return <footer>
      <div className='container'>
        <div className='row footer'>
          <div className='col-4 logo'>
            <p>Local Pointe Restaurant & Bar</p>
          </div>
          <div className='col-4'></div>
          <div className='col-4 social-media'></div>
        </div>
      </div>
    </footer>
  }
}

export default Footer;

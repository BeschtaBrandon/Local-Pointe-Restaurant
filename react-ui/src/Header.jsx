import React from 'react';
import Nav from './Nav.jsx';
import Banner from './Banner.jsx';
import './Header.css';

class Header extends React.Component {

  render() {
    return <header className='banner'>
        <Nav />
        <Banner />
    </header>
  }
}

export default Header;

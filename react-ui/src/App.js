import React, { Component } from 'react';
import AboutUs from './AboutUs.jsx';
import Header from './Header.jsx';
import ScrollToTopButton from './ScrollToTopButton.jsx';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <AboutUs />
        <ScrollToTopButton />
      </div>
    );
  }
}

export default App;

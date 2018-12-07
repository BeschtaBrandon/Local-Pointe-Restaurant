import React from 'react';
import './Banner.css';

class BannerItem extends React.Component {
  render() {
    return <div style={ this.props.display }>
    <h1 className='banner-heading'>{ this.props.heading }</h1>
    <p className='banner-info'>{ this.props.info }</p>
  </div>
  }
}

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        <BannerItem display={ this.props.display } heading='Friendly Staff' info='Always serving with smiles.'/>,
        <BannerItem display={ this.props.display } heading='Cold Beer' info='Large selection of draft, domestic, and imported beers'/>,
        <BannerItem display={ this.props.display } heading='Tasty Food' info='Check out our daily specials!'/>
      ],
      index: 0,
      display: 'none'
    }
  }

  handlePreviousShow = event => {
      if (this.state.index < 1) {
        this.setState({
          index: this.state.elements.length - 1,
          display: 'inline-block'
        });
      } else {
        this.setState({
          index: this.state.index - 1,
          display: 'inline-block'
        });
      }
  }

  handleNextShow = event => {
      if (this.state.index >= this.state.elements.length - 1) {
        this.setState({
          index: 0,
          display: 'inline-block'
        });
      } else {
        this.setState({
          index: this.state.index + 1,
          display: 'inline-block'
        });
      }
  }

    render() {
      return <div className='container'>
      <div className='row banner-text'>
        <div className='arrow-left' onClick={ this.handlePreviousShow }>&lt;</div>
          { this.state.elements[this.state.index] }
        <div className='arrow-right' onClick={ this.handleNextShow }>&gt;</div>
      </div>
      </div>
    }
  }

export default Banner;

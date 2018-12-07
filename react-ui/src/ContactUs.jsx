import React from 'react';
import './ContactUs.css';

class ContactUs extends React.Component {



  render() {
    return <section id='contact-us' className='contact-us'>
      <div className='container'>
        <div className='row'>
          <h2>Contact Us</h2>
          <div className='col-1 contact-icon'></div>
          <div className='col-3 contact-info'>
            <p>Phone</p>
            <span>(608)-253-5200</span>
          </div>
          <div className='col-1 contact-icon'></div>
          <div className='col-3 contact-info'>
            <p>Address</p>
            <span>N1095 WI-16, Lyndon Station, WI 53944</span>
          </div>
          <div className='col-1 contact-icon'></div>
          <div className='col-3 contact-info'>
            <p>Email</p>
            <span><a href='mailto:mail@mail.com'>example.com</a></span>
          </div>
        </div>
      </div>

    </section>
  }
}

export default ContactUs;

import React from 'react';
import * as FA from 'react-icons/fa'
import ContactForm from './ContactForm';
import './Contact.scss';

function Contact() {
  return (
    <div className='c-contact'>
      <div id='contactFormWrapper'>
        <div className='contactInfo'>
          <h3>Contact Information</h3>
          <p>Fill in the contact form and our team will <br /> get back to you as soon as possible!</p>
          <ul>
            <li>
              <a href={`tel:+31 6 82 794 205`} rel='noreferrer'>
                <FA.FaPhoneAlt />
                +31 6 21 541 073
              </a>
            </li>
            <li>
              <a href="mailto:info@robinassists.me" target='_blank' rel='noreferrer'>
                <FA.FaMailBulk />
                Info@robinassists.me
              </a>
            </li>
            <li>
              <a href="https://www.google.nl/maps" target='_blank' rel='noreferrer'>
                <FA.FaCompass />
                Noord-Holland, Amsterdam
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;

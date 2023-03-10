import React from 'react';
import * as FA from 'react-icons/fa'
import ContactForm from './ContactForm';
import './Contact.scss';
import { useLanguageContext } from '../Language/LanguageProvider';

function Contact() {
  const { dict } = useLanguageContext();

  return (
    <div className='c-contact'>
      <div id='contactFormWrapper'>
        <div className='contactInfo'>
          <h3>{dict.home.contact.form_title}</h3>
          <p>{dict.home.contact.form_text_first} <br /> {dict.home.contact.form_text_second}</p>
          <ul>
            <li>
              <a href={`tel:+31 6 82 794 205`} rel='noreferrer'>
                <FA.FaPhoneAlt />
                +31 61 3270609
              </a>
            </li>
            <li>
              <a href="mailto:milos@bemikasoftware.com" target='_blank' rel='noreferrer'>
                <FA.FaMailBulk />
                Milos@bemikasoftware.com
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

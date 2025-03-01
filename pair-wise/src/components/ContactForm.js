import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className="contact-form">
      <h1>Contact our team!</h1>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" placeholder="Jane" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" placeholder="Smitherton" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="email@janesfakedomain.net" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your message</label>
          <textarea id="message" placeholder="Enter your question or message" />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
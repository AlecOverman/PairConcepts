import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm("service_pcproj", "template_pcproj", e.target, "bNvVU8jOcxhSnzucu")
      .then(
        (result) => {
          setStatus('Success! Your message has been sent.');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Something went wrong, please try again later.');
        }
      );
  };

  return (
    <div className="contact-form">
      <h1>Contact our team!</h1>
      {status && <p>{status}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input 
            type="text" 
            id="firstName" 
            placeholder="Jane"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input 
            type="text" 
            id="lastName" 
            placeholder="Smitherton" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input 
            type="email" id="email" 
            placeholder="email@janesfakedomain.net" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your message</label>
          <textarea 
            id="message" 
            placeholder="Enter your question or message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
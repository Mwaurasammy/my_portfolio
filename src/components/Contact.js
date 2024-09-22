import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to EmailJS
    emailjs.send('sammy_mwaura', 'template_x7w5uzj', formData, '2Qw82Iwf5EXV5n3Gc')
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' }); // Reset form after submission
      }, (error) => {
        alert("There was an error sending your message. Please try again later.");
        console.error("EmailJS error:", error.text);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

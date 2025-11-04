import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0qux1gq',   // ✅ Your EmailJS Service ID 
      'template_rfmme0p',  // ✅ Your EmailJS Template ID
      form.current,
      'uMPHJ_ywCTF-I_Cj1'  // ✅ Your Public Key
    )
    .then(() => {
      alert('✅ Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      alert('❌ Failed to send message.');
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;

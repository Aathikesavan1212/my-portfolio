import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0qux1gq',           // ✅ Your EmailJS Service ID
      'template_rfmme0p',          // ✅ Your EmailJS Template ID
      form.current,
      'uMPHJ_ywCTF-I_Cj1'          // ✅ Your Public Key
    )
    .then(() => {
      alert('✅ Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('❌ Failed to send message.');
      console.log(error.text);
    });
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
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

import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import githubIcon from '../../assets/github.png';
import twitterIcon from '../../assets/twitter.png';
import linkedinIcon from '../../assets/linkedin.png';
import temetaIcon from '../../assets/TeMetaTech.jpeg';
import ictIcon from '../../assets/ICT_Academy_Kerala.png';
import appsIcon from '../../assets/AppsIcon.png';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_v07kger', 'template_pzq5zql', form.current, 'QFo9nBF16Tsel_NLT')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent!');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h2 className="contactTitle">Internship Experience</h2>
      <p className="contactDesc">
        I’ve gained real-world experience through internships with:
      </p>
      <div className="internships">
        <img src={appsIcon} alt="Apps Team" className="internIcon" />
        <img src={temetaIcon} alt="TeMetaTech" className="internIcon" />
        <img src={ictIcon} alt="ICT Academy" className="internIcon" />
        
      </div>

      <h2 className="contactTitle">Contact Me</h2>
      <p className="contactDesc">
        Let’s connect! Fill out the form below to get in touch about opportunities or collaborations.
      </p>

      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>

      <div className="socialLinks">
        <a href="https://github.com/sharjicodes" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://x.com/sharjithambadi?s=11" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://www.linkedin.com/in/sharjicodes/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
};

export default Contact;

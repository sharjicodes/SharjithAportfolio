import './contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import githubIcon from '../../assets/github.png';
import twitterIcon from '../../assets/twitter.png';
import linkedinIcon from '../../assets/linkedin.png';
import temetaIcon from '../../assets/TeMetaTech.jpeg';
import ictIcon from '../../assets/ICT_Academy_Kerala.png';
import appsIcon from '../../assets/AppsIcon.png';
const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState({ type: '', message: '' });

  const sendEmail = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setSendStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm('service_v07kger', 'template_pzq5zql', form.current, 'QFo9nBF16Tsel_NLT');
      form.current.reset();
      setSendStatus({ type: 'success', message: 'Thanks for reaching out. Your message was sent successfully.' });
    } catch (error) {
      const detail = error?.text || error?.message || 'EmailJS did not provide an error description.';
      const statusCode = error?.status ? ` (error ${error.status})` : '';
      console.error('EmailJS contact form error:', error);
      const isGmailAuthorizationError = error?.status === 412 && /Gmail_API:\s*(Invalid grant|Request had insufficient authentication scopes)/i.test(detail);
      setSendStatus({
        type: 'error',
        message: isGmailAuthorizationError
          ? 'Your message could not be sent. EmailJS’s Gmail connection is missing permission to send email. Reconnect Gmail in EmailJS → Email Services → service_v07kger and approve “Send email on your behalf,” then test the service and try again.'
          : `Your message could not be sent${statusCode}. ${detail} Check that the EmailJS service and template are active and that this site’s domain is allowed.`,
      });
    } finally {
      setSending(false);
    }
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
        <button type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send Message'}</button>
        {sendStatus.message && (
          <p className={`contactFormStatus ${sendStatus.type}`} role={sendStatus.type === 'error' ? 'alert' : 'status'}>
            {sendStatus.message}
          </p>
        )}
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

import React, { useState } from 'react';
import './Contact.css';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';
import youtubeIcon from '../assets/youtube.png';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <section className="contact-details-section">
        <div className="contact-form-section">
          <h2>Contact Us</h2>
          <p>
            SRDS continue to uplift the poor and marginalized by enabling<br />
            them to lead quality life in the last 30 years of service.....
          </p>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" required />
            <label>Email</label>
            <input type="email" required />
            <label>Phone</label>
            <input type="tel" required />
            <div className="submit-button" onClick={handleSubmit}>
              SUBMIT
            </div>
          </form>
          {submitted && (
            <p className="thank-you-message">Thanks for submitting!</p>
          )}
        </div>
        <div className="contact-info-section">
          <div className="address-phone-email">
            <div>
              <h3>ADDRESS</h3>
              <p>
                3/1 M G Road<br />
                Arakandanallur post<br />
                Kandachipuram Taluk, Villupuram<br />
                District, Tamil Nadu, India 605757<br />
                India
              </p>
            </div>
            <div>
              <h3>PHONE</h3>
              <p>+91-9976676226</p>
            </div>
            <div>
              <h3>EMAIL</h3>
              <p><a href="mailto:radhasrds@gmail.com">radhasrds@gmail.com</a></p>
            </div>
          </div>
          <div className="social-media-icons">
            <div className="social-icon">
              <img src={facebookIcon} alt="Facebook" />
              <p>Facebook</p>
            </div>
            <div className="social-icon">
              <img src={twitterIcon} alt="Twitter" />
              <p>Twitter</p>
            </div>
            <div className="social-icon">
              <img src={instagramIcon} alt="Instagram" />
              <p>Instagram</p>
            </div>
            <div className="social-icon">
              <img src={youtubeIcon} alt="YouTube" />
              <p>YouTube</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-section">
        © 2035 by Last Chance. Powered and secured by <a href="#">InnovationNest</a> | <a href="#">Back to Top</a>
      </footer>
    </div>
  );
}

export default Contact;

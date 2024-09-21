import React from 'react';
import './AboutUs.css';


const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-profile">
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}  
          alt="Company"
          className="about-image"
        />
        <div className="about-text">
          <h2>About Our Company</h2>
          <p>
            Welcome to [Your Company Name], your number one source for all things fashion, 
            electronics, and home goods. We're dedicated to providing you with the very 
            best of products, with a focus on dependability, customer service, and uniqueness.
          </p>
          <p>
            Founded in [Year], [Your Company Name] has come a long way from its beginnings 
            in a small office. When we first started, our passion for helping people drove 
            us to quit our day jobs and turn hard work and inspiration into a booming online 
            store.
          </p>
          <p>
            We hope you enjoy our products as much as we enjoy offering them to you. If you 
            have any questions or comments, please don't hesitate to contact us.
          </p>
        </div>
      </div>
      
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver high-quality products at affordable prices while 
          providing top-notch customer service. We aim to create a convenient and enjoyable 
          shopping experience that our customers can trust.
        </p>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us:</p>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Your Message" required />
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;

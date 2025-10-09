import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import CustomAlert from '../CustomAlert'; 

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        setAlertMessage("Message sent successfully!");
        setShowAlert(true);
        event.target.reset(); 
      } else {
        setAlertMessage(data.message || "Something went wrong. Please try again.");
        setShowAlert(true);
      }

    } catch (error) {
      console.error("Error:", error);
      setAlertMessage("Network error. Please check your connection.");
      setShowAlert(true);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on. You can
            contact me anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>tamimtajwar2008@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>+880 17969-72098</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Natore, Bangladesh</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <input 
            type="hidden" 
            name="access_key" 
            value="95eeca81-574d-48c9-b2ce-37f09581c869" 
          />

          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
          
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>

      {showAlert && (
        <CustomAlert
          message={alertMessage}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default Contact;

import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import generalData from "../../data/General.json";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const footerData = generalData;
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    sendEmail();
    setLoading(false);
    setIsFormSubmitted(true);
  };

  const sendEmail = () => {
    const gOwnerEmail = footerData.email;
    const { name, email, message } = formData;
    if (!name || !message || !email || !email.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")) return;
    const subject = name + ' contacts Shani Kupiec from Portfolio';

    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${gOwnerEmail}&su=${subject}&body=${message}`;
    window.open(url);
  };

  return (
    <>
      <h2 className="head-text">Click here to get in touch</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href={`mailto:${footerData.email}`} className="p-text">
            {footerData.email}
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href={`tel:${footerData.mobile}`} className="p-text">
            {footerData.mobile}
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleChangeInput} />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Your contact is greatly appreciated</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__primarybg");

import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Feel free to reach out with any questions, suggestions, or feedback.
      </p>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:b2bmilan@gmail.com">b2bmilan@gmail.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
        <p>Address: Montreal, Quebec, Canada</p>
      </div>
    </div>
  );
};

export default Contact;

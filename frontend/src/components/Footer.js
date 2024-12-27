import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section about">
          <h3>About Tillet Fashion Center</h3>
          <p>
            Explore the essence of Ethiopian tradition and elegance with Habesha
            Fashion Center. We bring you handcrafted dresses, authentic jewelry,
            and timeless wedding collections that reflect our cultural heritage.
          </p>
          <p>© 2024 Tillet Fashion Center. All Rights Reserved.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>

            <li>
              <a href="/products">Our Product</a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section contact">
          <h3>Contact Information</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Addis Ababa, Ethiopia
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> +251-123-456-789
          </p>
          <p>
            <i className="fas fa-envelope"></i> support@tillet.com
          </p>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="footer-section newsletter">
          <h3>Join Our Newsletter</h3>
          <p>Stay updated with our latest collections, offers, and events!</p>
          {/* <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form> */}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

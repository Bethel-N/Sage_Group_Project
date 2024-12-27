import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data (e.g., send to a backend or email service)
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="about-us">
      <h1>Welcome to Tillet Fashion Center</h1>

      <section className="intro">
        <p>
          At Tillet Fashion Center, we celebrate the timeless beauty and rich
          culture of Ethiopian fashion. Our mission is to bring you the most
          exquisite traditional and modern Tillet clothing, jewelry, and
          accessories. Whether you're looking for an elegant Tillet dress or the
          perfect accessory, we offer the finest quality handcrafted garments.
        </p>
      </section>

      <section className="story">
        <div className="text">
          <h2>Our Story</h2>
          <p>
            Tillet Fashion Center was founded with a passion for preserving the
            Ethiopian heritage while blending it with contemporary styles. We
            carefully curate our collections to provide you with the best of
            Ethiopian fashion, whether you're dressing for a wedding, a
            festival, or any special occasion.
          </p>
        </div>
        <div className="image">
          <img src="/images/v5.jpg" alt="fashion" />
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals through fashion by offering a
          wide range of stylish, high-quality Ethiopian clothing and
          accessories. We aim to provide a unique shopping experience by
          offering sustainable, handcrafted pieces that reflect Ethiopia's rich
          culture and craftsmanship.
        </p>
      </section>

      <section className="contact">
        <div>
          <h3>Get In Touch</h3>
          <p>
            If you have any questions or want to learn more about our products,
            don't hesitate to reach out. We're here to help!
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default About;

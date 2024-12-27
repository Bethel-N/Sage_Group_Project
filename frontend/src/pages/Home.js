// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data } = await axios.get("http://localhost:5000/api/products");
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="container py-5">
//       <h1 className="text-center text-primary mb-5">
//         Traditional Clothing Store
//       </h1>

//       <div className="row">
//         {products.map((product) => (
//           <div className="col-md-4 col-lg-3 mb-4" key={product._id}>
//             <div className="card h-100 shadow-sm border-warning">
//               <img
//                 src={product.image || "placeholder.jpg"}
//                 alt={product.name}
//                 className="card-img-top img-fluid"
//                 style={{ height: "250px", objectFit: "cover" }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title text-center text-primary">
//                   {product.name}
//                 </h5>
//                 <p className="card-text text-muted text-center">
//                   {product.description}
//                 </p>
//                 <p className="text-center text-success fw-bold">
//                   ${product.price}
//                 </p>
//               </div>
//               <div className="card-footer text-center bg-light">
//                 <button className="btn btn-warning btn-sm">Buy Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Ensure styles are defined for each component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faUser,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// Banner Component
const Banner = () => (
  <div className="banner">
    <h1>Welcome to Tillet Traditional Store</h1>
    <p>Discover authentic and beautiful traditional clothing.</p>
  </div>
);

// About Section Component
const AboutSection = () => (
  <div className="about-section py-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card about-card shadow">
            <div className="card-body text-center">
              <h2 className="card-title">About Us</h2>
              <p className="card-text">
                Discover authentic traditional clothing and accessories at
                Tillet Traditional Store. Celebrate heritage with our carefully
                curated collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Product Carousel Component
const ProductCarousel = ({ products }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="slider-container my-5">
      <h2 className="category-heading " style={{ color: "#333333" }}>
        Category
      </h2>
      <Slider {...sliderSettings}>
        {/* Category 1 */}
        <div className="slider-item">
          <div
            className="card h-100 shadow-sm category-card"
            style={{ border: "4px solid #333333" }}
          >
            <img
              src="/images/m14.jpg" // Place this image in the public/images folder
              alt="Category 1"
              className="card-img-top img-fluid"
              style={{
                height: "250px", // Adjust the height to your liking
                width: "100%", // Make sure the image fills the width of the container
                objectFit: "contain", // This ensures the full image is shown without cropping
              }}
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ color: "#333333", fontWeight: "bold" }}
              >
                Men's Wear
              </h5>
              <p className="card-text text-muted text-center">
                Explore elegant and authentic traditional outfits for men.
              </p>
            </div>
          </div>
        </div>

        {/* Category 2 */}
        <div className="slider-item">
          <div
            className="card h-100 shadow-sm category-card"
            style={{ border: "2px solid #333333" }}
          >
            <img
              src="/images/a1.jpg"
              alt="Category 2"
              className="card-img-top img-fluid"
              style={{
                height: "250px", // Adjust height
                width: "100%", // Ensure full width
                objectFit: "contain", // Ensures full image visibility
              }}
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ color: "#333333", fontWeight: "bold" }}
              >
                Women's Wear
              </h5>
              <p className="card-text text-muted text-center">
                Beautiful traditional attire for women, perfect for every
                occasion.
              </p>
            </div>
          </div>
        </div>

        {/* Category 3 */}
        <div className="slider-item">
          <div
            className="card h-100 shadow-sm category-card"
            style={{ border: "4px solid #333333" }}
          >
            <img
              src="/images/q2.jpg"
              alt="Category 3"
              className="card-img-top img-fluid"
              style={{
                height: "250px", // Adjust height
                width: "100%", // Ensure full width
                objectFit: "contain", // Ensures full image visibility
              }}
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ color: "#333333", fontWeight: "bold" }}
              >
                Children's Wear
              </h5>
              <p className="card-text text-muted text-center">
                Adorable traditional outfits for kids of all ages.
              </p>
            </div>
          </div>
        </div>

        {/* Category 4 */}
        <div className="slider-item">
          <div
            className="card h-100 shadow-sm category-card"
            style={{ border: "2px solid #333333" }}
          >
            <img
              src="/images/j8.jpg"
              alt="Category 4"
              className="card-img-top img-fluid"
              style={{
                height: "250px", // Adjust height
                width: "100%", // Ensure full width
                objectFit: "contain", // Ensures full image visibility
              }}
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ color: "#333333", fontWeight: "bold" }}
              >
                Accessories
              </h5>
              <p className="card-text text-muted text-center">
                Complete your look with traditional accessories and jewelry.
              </p>
            </div>
          </div>
        </div>

        {/* Category 5 */}
        <div className="slider-item">
          <div
            className="card h-100 shadow-sm category-card"
            style={{ border: "4px solid #333333" }}
          >
            <img
              src="/images/k4.jpg"
              alt="Category 2"
              className="card-img-top img-fluid"
              style={{
                height: "250px", // Adjust height
                width: "100%", // Ensure full width
                objectFit: "contain", // Ensures full image visibility
              }}
            />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ color: "#333333", fontWeight: "bold" }}
              >
                Weeding Caba
              </h5>
              <p className="card-text text-muted text-center">
                Beautiful traditional attire for women, perfect for every
                occasion.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

// Product Grid Component

// Product Grid Component
const ProductGrid = ({ products }) => (
  <div className="container">
    <h2 className="text-center mb-4">All Products</h2>
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 col-lg-3 mb-4" key={product._id}>
          <div className="card h-100 shadow-lg custom-card">
            <img
              src={product.image || "placeholder.jpg"}
              alt={product.name}
              className="card-img-top img-fluid"
              style={{
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px 10px 0 0",
              }}
            />
            <div className="card-body">
              <h5 className="">{product.name}</h5>
              <p className="">{product.description}</p>
              <p className="">${product.price}</p>
            </div>
            <div className="card-footer text-center bg-light">
              <div className="d-flex justify-content-center gap-2">
                <Link
                  to={`/product/${product._id}`}
                  className="btn btn-outline-secondary btn-sm"
                  style={{ borderColor: "#ff69b4", color: "#ff69b4" }}
                >
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example API call for submitting the form
    console.log("Form Data Submitted:", formData);
    setResponseMessage("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };
  //====================================================================================================email

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>We’d love to hear from you. Connect with us today!</p>
      </div>
      <div className="contact-details-new">
        <div className="contact-card">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <div className="contact-info">
            <h3>Phone</h3>
            <p>+251 123 456 789</p>
          </div>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <div className="contact-info">
            <h3>Email</h3>
            <p>tilletFashion@gmail.com</p>
          </div>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          <div className="contact-info">
            <h3>Address</h3>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faClock} className="contact-icon" />
          <div className="contact-info">
            <h3>Hours</h3>
            <p>Mon - Fri: 9 AM - 6 PM</p>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            <FontAwesomeIcon icon={faUser} /> Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <FontAwesomeIcon icon={faComment} /> Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="send-btn">
          <FontAwesomeIcon icon={faPaperPlane} /> Send
        </button>
        {responseMessage && (
          <p className="response-message animated">{responseMessage}</p>
        )}
      </form>
    </div>
  );
};

// Main Home Component
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <Banner />
      <AboutSection />
      <ProductCarousel products={products} />
      <ProductGrid products={products} />
      <ContactSection />
    </div>
  );
};

export default Home;

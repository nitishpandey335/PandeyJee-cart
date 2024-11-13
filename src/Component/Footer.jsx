import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import groceryshop from "../images/logo-png.png"; // Ensure the correct path for your logo
import amazonpay from "../images/american-express.svg"; // Ensure the correct path for your payment method image
import american from "../images/american-express.svg";
import mastercard from "../images/mastercard.svg";
import paypal from "../images/paypal.svg";
import visa from "../images/visa.svg";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Subscribed email:", email);
    // Add your email processing logic here
  };

  return (
    <div>
      <footer className="footer">
        <div className="overlay" />
        <div className="container">
          <div className="row footer-row">
            {/* Logo and Description Section */}
            <div className="col-sm-6 col-lg-3 mb-30">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <img
                      src={groceryshop}
                      style={{ width: 300, padding: 20, marginLeft: "-30px" }}
                      alt="logo"
                    />
                  </Link>
                </div>
                <p className="mb-30">
                  We deliver more than your expectations and help you to grow
                  your business exponentially by providing customized
                  applications. So, don't just think, get ready to convert
                  your ideas into reality.
                </p>
                <div className="dimc-protect">
                  <div className="col-lg-5 text-lg-start text-center mb-2 mb-lg-0">
                    <h4>Payment Partners</h4>
                    <ul className="list-inline d-flex mb-0">
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={amazonpay} alt="Amazon Pay" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={american} alt="American Express" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={mastercard} alt="MasterCard" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={paypal} alt="PayPal" />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="#!">
                          <img src={visa} alt="Visa" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* All Category Section */}
            <div className="col-sm-6 col-lg-3 mb-30">
              <div className="footer-widget mb-0">
                <h4>All Category</h4>
                <div className="line-footer" />
                <div className="row">
                  <div className="col">
                    <ul className="footer-link mb-0">
                      <li>
                        <Link to="#">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Dairy, Bread &amp; Eggs
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Snacks &amp; Munchies
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Fruits &amp; Vegetables
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Cold Drinks &amp; Juices
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Breakfast &amp; Instant Food
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Bakery &amp; Biscuits
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Chicken, Meat &amp; Fish
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* For Consumers Section */}
            <div className="col-sm-6 col-lg-3 mb-30">
              <div className="footer-widget mb-0">
                <h4>For Consumers</h4>
                <div className="line-footer" />
                <div className="row">
                  <div className="col">
                    <ul className="footer-link mb-0">
                      <li>
                        <Link to="#">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link to="/ShopCart">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Promos &amp; coupons
                        </Link>
                      </li>
                      <li>
                        <Link to="/MyAccountOrder">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Shipping
                        </Link>
                      </li>
                      <li>
                        <Link to="/MyAccountOrder">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Product Returns
                        </Link>
                      </li>
                      <li>
                        <Link to="/MyAccountPaymentMethod">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Payments
                        </Link>
                      </li>
                      <li>
                        <Link to="/Contact">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Get to Know Us Section */}
            <div className="col-sm-6 col-lg-3 mb-30">
              <div className="footer-widget mb-0">
                <h4>Get to know us</h4>
                <div className="line-footer" />
                <div className="row">
                  <div className="col">
                    <ul className="footer-link mb-0">
                      <li>
                        <Link to="/AboutUs">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Company
                        </Link>
                      </li>
                      <li>
                        <Link to="/AboutUs">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="/Blog">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link to="/Contact">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Help Center
                        </Link>
                      </li>
                      <li>
                        <Link to="/Blog">
                          <span>
                            <i className="fa fa-angle-right" />
                          </span>{" "}
                          Our Value
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Newsletter Section */}
                <div className="footer-widget mt-8">
                  <form onSubmit={handleSubmit}>
                    <div className="newsletter-item">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="form-control form-control-lg"
                        required
                      />
                      <button type="submit">
                        <i className="fa fa-paper-plane" />
                      </button>
                    </div>
                  </form>
                  <ul className="social-media" style={{ display: "flex", gap: 10 }}>
                    <li>
                      <Link to="#" className="facebook" aria-label="Facebook">
                        <i className="bx bxl-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="twitter" aria-label="Twitter">
                        <i className="bx bxl-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="instagram" aria-label="Instagram">
                        <i className="bx bxl-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="linkedin" aria-label="LinkedIn">
                        <i className="bx bxl-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <div className="container text-center">
            <div className="footer-copy">
              <div className="copyright">
                © 2024 All Rights Reserved By
                <Link to="https://nitishpandey335portfolio.netlify.app/" target="_blank">
                  @nitish_pandey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

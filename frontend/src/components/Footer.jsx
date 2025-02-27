import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXing } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "../css/style.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="desktop-footer">
            <div className="row">
              <div className="col-md-5">
                <img
                  src="logo.png"
                  alt=" Logo"
                  className="footer-logo"
                  width="100px"
                />
                <h5>LookBooker(India Private Limited)</h5>
                <div className="social-icons mt-3">
                  <a href="#">
                    <i className="bi bi-facebook">
                      <FaFacebookF />
                    </i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin">
                      <FaLinkedinIn />
                    </i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter-x">
                      <FaXing />
                    </i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                </div>
              </div>

              <div className="col-md-2">
                <h5>Quick Links</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Enquiry</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-2">
                <h5>Company</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Schedule</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <h5>Contact Us</h5>
                <p>
                  {" "}
                  <IoLocationSharp />
                  4th Floor, Sausar,
                  Gajanan Colony, Chhindwara 452010
                </p>
                <p>
                  <FaPhoneAlt />
                  <a
                    href="tel:9993082676"
                    className="text-decoration-none text-dark"
                  >
                    9993082676
                  </a>
                </p>
                <p>
                  <IoMdMail />{" "}
                  <a
                    href="mailto:info@greenlinkgoldpoint.com"
                    className="text-decoration-none text-dark"
                  >
                    akashdhok1265@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mobile-accordion">
            <div className="accordion" id="footerAccordion">
              {["Quick Links", "Company", "Contact Us"].map((title, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${title.replace(/\s+/g, "")}`}
                    >
                      {title}
                    </button>
                  </h2>
                  <div
                    id={title.replace(/\s+/g, "")}
                    className="accordion-collapse collapse"
                    data-bs-parent="#footerAccordion"
                  >
                    <div className="accordion-body">
                      {title === "Quick Links" && (
                        <ul className="footer-links">
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Enquiry</a>
                          </li>
                        </ul>
                      )}
                      {title === "Company" && (
                        <ul className="footer-links">
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="#">FAQ</a>
                          </li>
                          <li>
                            <a href="#">
                              Schedule
                            </a>
                          </li>
                        </ul>
                      )}
                      {title === "Contact Us" && (
                        <>
                          <p>
                            <IoLocationSharp /> 4th Floor, Sausar,
                            Gajanan Colony, Chhindwara 452010
                          </p>
                          <p>
                            <FaPhoneAlt />
                            <a
                              href="#"
                              className="text-decoration-none text-dark"
                            >
                              9993082676
                            </a>
                          </p>
                          <p>
                            <IoMdMail />{" "}
                            <Link
                              to=""
                              className="text-decoration-none text-dark"
                            >
                             akashdhok1265@gmail.com
                            </Link>
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h5 className="text-center mb-3">Warning</h5>
            <p className="warning-text text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              veniam rem blanditiis ab dolorem, unde nostrum nam enim, qui
              suscipit ipsam laborum fugit architecto dicta itaque. Omnis fuga
              sint quae est dignissimos, laudantium quaerat asperiores inventore
              aliquam veniam iste aut reprehenderit recusandae ut ipsa. Fuga
              officia repellat iste laudantium unde excepturi facilis id
              assumenda animi.
            </p>
          </div>

          <div className="copyright">
            <div className="row">
              <div className="col-md-6">
                <p className="small mb-1">
                  &copy; 2025 Lookbooker All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-md-end">
                <a href="#" className="text-decoration-none text-dark small">
                  Designed By Akash®
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2 className="text-primary">Contact Us</h2>
          <p className="text-muted">We'd love to hear from you!</p>
        </div>
      </div>

      <div className="row mt-4">
        
        <div className="col-md-4 text-center">
          <div className="p-3 border rounded shadow-sm">
            <FaPhoneAlt className="text-primary fs-3 mb-2" />
            <h5>Call Us</h5>
            <p>+91 8518042728</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="p-3 border rounded shadow-sm">
            <FaEnvelope className="text-primary fs-3 mb-2" />
            <h5>Email</h5>
            <p>akashdhok1265@gmail.com</p>
          </div>
        </div>
        <div className="col-md-4 text-center">
          <div className="p-3 border rounded shadow-sm">
            <FaMapMarkerAlt className="text-primary fs-3 mb-2" />
            <h5>Visit Us</h5>
            <p>  4th Floor, Sausar,
            Gajanan Colony</p>
          </div>
        </div>
      </div>

     
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="border p-4 rounded shadow">
            <h4 className="mb-3 text-primary text-center">Send a Message</h4>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="message"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={changeHandler}
                  required
                ></textarea>
              </div>
              <button className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

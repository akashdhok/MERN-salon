import React from 'react'
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
const DashHome = () => {
    let name = localStorage.getItem("name");
    let email = localStorage.getItem("email");
  return (
    <>
     <br />
          <h3 align="center" style={{color : "lightblue", fontSize : "60px"}}>Welcome : {name} </h3>
          <p  align="center"> Email : {email}</p>
          <br />
          <hr />
          <br />
          <p align = "center" style={{color : "grey", fontSize : "20px"}}>
            {name} Company is a technology platform offering a variety of services at
            home. Customers use our platform to book services such as beauty
            treatments, haircuts, massage therapy etc. These services are delivered in the
            comfort of their home and at a time of their choosing. We promise our
            customers a high quality, standardised and reliable service experience.
            To fulfill this promise, we work closely with our hand-picked service
            partners, enabling them with technology, training, products, tools,
            financing, insurance and brand, helping them succeed and deliver on this
            promise. Our Vision: Deliver home services and solutions like never
            experienced before
          </p>
          <br />
          <h3 align = "center" style={{color : "grey", fontSize : "40px"}}>Online Booking Services for...</h3>
          <br />
          <hr />
          <div style={{display : "grid", justifyContent : "center"}}>
            <div style={{display : "flex", justifyContent : "space-evenly"}}>
                <img src="./aboutimg1.webp" alt=""  width="40%" height="300px"  />
                <img src="./corusel1.webp" alt=""  width="40%" height="300px"  />
    
            </div>
            <br />
            <div style={{display : "flex", justifyContent : "space-evenly"}} >
            <img src="./corusel3.jpg" alt="" width="40%" height="300px"/>
            <img src="./corusel2.jpg" alt="" width="40%" height="300px" />
            </div>
          </div>
          <br />
          <hr />
          <section className="left-column">
          <div id="heroCarousel2" className="carousel slide heroCarousel2" data-bs-ride="carousel">
            <div className="text-center">
              <h2 className="section-title mb-2 pt-4">Our Customers</h2>
              <p className="text-muted">Real Stories From Customers</p>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item carousel-item-38 active">
                <div className="container g-4 m-auto mb-5 row gap-333">
                  <div className="col-lg-4">
                    <div className="testimonial-card">
                      <p className="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div className="d-flex align-items-center">
                        <img src="./alex1.jpg" alt="Alex Dieasel" className="profile-img me-3" />
                        <div>
                          <h5 className="customer-name">Alex Dieasel</h5>
                          <p className="customer-title">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="testimonial-card">
                      <p className="testimonial-text">Lorem Ipsum has been the industry's standard dummy text since the 1500s.</p>
                      <div className="d-flex align-items-center">
                        <img src="./raquel.jpg" alt="Raquel L" className="profile-img me-3" />
                        <div>
                          <h5 className="customer-name">Raquel L</h5>
                          <p className="customer-title">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="testimonial-card">
                      <p className="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <div className="d-flex align-items-center">
                        <img src="am.jpg" alt="Piter Zampa" className="profile-img me-3" />
                        <div>
                          <h5 className="customer-name">Piter Zampa</h5>
                          <p className="customer-title">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev carousel-control-prev-3333" type="button" data-bs-target="#heroCarousel2" data-bs-slide="prev">
            <HiMiniArrowSmallLeft style={{color : "black"}}/>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next carousel-control-prev-3333" type="button" data-bs-target="#heroCarousel2" data-bs-slide="next">
              <HiArrowSmallRight style={{color : "black"}} />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
    </>
  )
}

export default DashHome
import React from "react";
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container fluid className="text-center py-4">
        <h3 className="text-primary" style={{ fontSize: "60px" }}>Who We Are</h3>
        <hr />
        <p className="text-muted px-3 px-md-5" style={{ fontSize: "20px" }}>
          LookBooker Company is a technology platform offering a variety of services at home.
          Customers use our platform to book services such as beauty treatments, haircuts,
          massage therapy, etc. These services are delivered in the comfort of their home at a
          time of their choosing. Our Vision: Deliver home services and solutions like never
          experienced before.
        </p>
        <hr />
      </Container>

      <Container fluid className="text-center">
        <h3 className="text-secondary" style={{ fontSize: "40px" }}>Online Booking Services for...</h3>
        <hr />
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="mb-3">
            <img src="./aboutimg1.webp" alt="Service 1" className="img-fluid rounded" />
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <img src="./corusel1.webp" alt="Service 2" className="img-fluid rounded" />
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <img src="./corusel3.jpg" alt="Service 3" className="img-fluid rounded" />
          </Col>
          <Col xs={12} md={6} className="mb-3">
            <img src="./corusel2.jpg" alt="Service 4" className="img-fluid rounded" />
          </Col>
        </Row>
        <hr />
      </Container>

      <Container fluid className="py-4">
        <div className="text-center">
          <h2 className="section-title mb-2">Our Customers</h2>
          <p className="text-muted">Real Stories From Customers</p>
        </div>

        <div id="heroCarousel2" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Row className="justify-content-center">
                <Col xs={12} md={4} className="mb-3">
                  <div className="testimonial-card text-center p-3">
                    <p className="testimonial-text">
                      Lorem Ipsum is simply dummy text of the printing industry.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <img src="./alex1.jpg" alt="Alex Dieasel" className="profile-img me-2" />
                      <div>
                        <h5 className="customer-name">Alex Dieasel</h5>
                        <p className="customer-title">Student</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <div className="testimonial-card text-center p-3">
                    <p className="testimonial-text">
                      Lorem Ipsum has been the industry's standard dummy text since the 1500s.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <img src="./raquel.jpg" alt="Raquel L" className="profile-img me-2" />
                      <div>
                        <h5 className="customer-name">Raquel L</h5>
                        <p className="customer-title">Student</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                  <div className="testimonial-card text-center p-3">
                    <p className="testimonial-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                      <img src="am.jpg" alt="Piter Zampa" className="profile-img me-2" />
                      <div>
                        <h5 className="customer-name">Piter Zampa</h5>
                        <p className="customer-title">Student</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel2" data-bs-slide="prev">
            <HiMiniArrowSmallLeft size={30} style={{ color: "black" }} />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel2" data-bs-slide="next">
            <HiArrowSmallRight size={30} style={{ color: "black" }} />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Container>
    </>
  );
};

export default About;

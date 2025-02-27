import axios from 'axios';
import React, { useState } from 'react';
import BASE_URL from '../config';
import { HiMiniArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const Search = () => {
  const [searchData, setSearchData] = useState({});
  const [displayData, setDisplayData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = `${BASE_URL}/lookbooker/search`;
    try {
      const res = await axios.post(api, searchData);
      setDisplayData(res.data);
      setShowTable(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Search Form Section */}
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-3">
        <div className="w-100" style={{ maxWidth: "500px", background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
          <h1 className="text-center text-primary mb-4">Search Salon By Its Name</h1>
          <div className="text-center mb-3">
            <img src="./logo.png" alt="Logo" width="80px" />
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label">Salon Name</label>
              <input type="text" className="form-control" name="name" placeholder="Enter Salon name" onChange={changeHandler} />
            </div>
            <button className="btn btn-primary w-100" onClick={submitHandler}>Search</button>
          </form>
        </div>
      </div>

      {/* Search Results Table */}
      {showTable && displayData.length > 0 && (
        <div className="container my-4">
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Salon Name</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Address</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {displayData.map((e, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.number}</td>
                    <td>{e.address}</td>
                    <td>{e.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Consumer Testimonials Section (Always Visible) */}
      <section className="container my-5">
        <div className="text-center">
          <h2 className="section-title mb-2">Our Customers</h2>
          <p className="text-muted">Real Stories From Customers</p>
        </div>
        <div id="heroCarousel2" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner text-center">
            <div className="carousel-item active">
              <div className="row justify-content-center">
                {/* Testimonial 1 */}
                <div className="col-md-4 col-sm-12">
                  <div className="p-3 border rounded bg-white shadow-sm">
                    <p className="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <img src="./alex1.jpg" alt="Alex Dieasel" className="rounded-circle me-3" width="50px" />
                      <div>
                        <h5 className="customer-name">Alex Dieasel</h5>
                        <p className="customer-title text-muted">Student</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial 2 */}
                <div className="col-md-4 col-sm-12">
                  <div className="p-3 border rounded bg-white shadow-sm">
                    <p className="testimonial-text">Lorem Ipsum has been the industry's standard dummy text since the 1500s.</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <img src="./raquel.jpg" alt="Raquel L" className="rounded-circle me-3" width="50px" />
                      <div>
                        <h5 className="customer-name">Raquel L</h5>
                        <p className="customer-title text-muted">Student</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial 3 */}
                <div className="col-md-4 col-sm-12">
                  <div className="p-3 border rounded bg-white shadow-sm">
                    <p className="testimonial-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="d-flex align-items-center justify-content-center">
                      <img src="am.jpg" alt="Piter Zampa" className="rounded-circle me-3" width="50px" />
                      <div>
                        <h5 className="customer-name">Piter Zampa</h5>
                        <p className="customer-title text-muted">Student</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel2" data-bs-slide="prev">
            <HiMiniArrowSmallLeft style={{ color: "black", fontSize: "24px" }} />
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel2" data-bs-slide="next">
            <HiArrowSmallRight style={{ color: "black", fontSize: "24px" }} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Search;

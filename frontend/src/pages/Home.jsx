import React, {   useEffect, useState } from 'react'
import Crousel from './Crousel'
import { FaStar } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios'
import BASE_URL from '../config'
const Home = () => {
  const navigate = useNavigate()
  const[apiData , setApiData] = useState([])
 
  const loadData = async()=>{
    let api = `${BASE_URL}/lookbooker/display`
    try {
      const res = await axios.get(api)
      setApiData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    loadData()
  } , [])
  const appointment = (id)=>{
    navigate(`/appoint/${id}`)
}
  return (
  <>
  <Crousel/>
  <Container fluid className="mt-4" style={{backgroundColor : "#94b094"}}>
    <br />
      <h1 className="text-center mb-4">Our Registered Salons</h1>
        <Row className="justify-content-center">
          {apiData.map((e, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3 h-100">
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{e.name}</Card.Title>
                  <Card.Text>
                    <ul className="list-unstyled">
                      <li><strong>Address:</strong> {e.address}</li>
                      <li><strong>City:</strong> {e.city}</li>
                      <li><strong>Email:</strong> {e.email}</li>
                      <li><strong><FaStar color="gold" />Ratings:</strong> {e.rating}</li>

                      <li><strong>Phone:</strong> {e.number}</li>
                    </ul>
                  </Card.Text>
                  <Button variant="primary" className="w-100" onClick={()=>{appointment(e._id)}}>Take Appointment</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </Container>
  </>
  )
}

export default Home
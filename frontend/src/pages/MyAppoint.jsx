import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import BASE_URL from '../config'
const MyAppoint = () => {
    let[apiData , setApiData] = useState([])
    const loadData = async()=>{
        let api = `${BASE_URL}/lookbooker/getdata/?salonid=${localStorage.getItem("salonid")}`
        try {
            const res = await axios.get(api)
            setApiData(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        loadData()
    },[])
  return (
    <>
    <Container fluid className="mt-4" style={{backgroundColor : "#94b094"}}>
    <br />
      <h1 className="text-center mb-4">Our Appointments</h1>
        <Row className="justify-content-center">
          {apiData.map((e, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg border-0 rounded-3 h-100">
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{e.name}</Card.Title>
                  <Card.Text>
                    <ul className="list-unstyled">
                      <li><strong>Address:</strong> {e.address}</li>
                      <li><strong>Email:</strong> {e.email}</li>
                      <li><strong>Phone:</strong> {e.number}</li>
                      <li><strong>Date:</strong> {e.date}</li>
                      <li><strong>Time:</strong> {e.time}</li>

                    </ul>
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </Container>
    
    </>
  )
}

export default MyAppoint
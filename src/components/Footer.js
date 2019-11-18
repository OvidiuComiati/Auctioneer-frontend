import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
const Footer = () => {
  return (

    <Navbar bg="dark" variant="dark" style={{height:"80px", padding: "15px"}}>
      <Navbar.Brand style={{marginLeft:"100px",marginRight:"10px", fontSize:"35px", fontFamily:"Impact"}}>Auctioneer</Navbar.Brand>
      <Nav>
      <Nav.Link eventKey="disabled" style={{marginLeft:"500px",marginRight:"50px", fontSize:"15px"}}>2019 auctioneer.com. All rights reserved</Nav.Link>
    </Nav>
    </Navbar>
  )
}

export default Footer
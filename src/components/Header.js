import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
const Header = () => {
  return (

    <Navbar bg="primary" variant="dark" style={{height:"60px", padding: "10px"}}>
      <Navbar.Brand style={{marginLeft:"100px",marginRight:"10px", fontSize:"35px", fontFamily:"Impact"}}>Auctioneer</Navbar.Brand>
      <Nav>
      <Nav.Link eventKey="disabled" style={{marginLeft:"10px",marginRight:"10px", fontSize:"15px"}}>Home</Nav.Link>
      <Nav.Link style={{marginLeft:"10px",marginRight:"10px", fontSize:"15px", fontWeight:"bold", color:"white"}}>Auction House</Nav.Link>
      <Nav.Link eventKey="disabled" style={{marginLeft:"10px",marginRight:"10px", fontSize:"15px"}}>About</Nav.Link>
    </Nav>
    </Navbar>
  )
}

export default Header
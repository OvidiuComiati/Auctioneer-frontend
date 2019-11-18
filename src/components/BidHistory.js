import React, { Component } from 'react';
import {Badge, Col, Row, Container, Alert } from 'react-bootstrap'


export default class BidHistory extends Component {
  state = {
    currentOffer: this.props.currentOffer
  }

  render() {
    return (
      <Container className="container">
        <Col >
          <Container>
            <Row style={{marginLeft:"25%"}}>
              <Col sm={3}>
                <h1>Bid History</h1>
              </Col>
              <Col sm={3}>
                <h3>
                  <Badge variant="info">Total bids so far: {this.props.numberOfBids}</Badge>
                </h3>
              </Col>
            </Row>
          </Container>
          <ul className="alert__list" style={{maxHeight:140, position:"relative", marginRight:"15%",marginLeft:"13%", maxWidth:"800px"}}>
            {
              this.props.bids.map((bid, idx) => (
                //<p>{bid.bidder} has made a bid {bid.amount} making current offer of {bid.currentOffer}</p>
                <li>
                  <Alert key={idx} variant={bid.bidder === 'COMPUTER' ? 'danger' : 'success'} style={{"fontSize":"15px" }}>
                    {bid.bidder} has made a bid {bid.amount} making current offer of {bid.currentOffer}
                  </Alert>
                </li>
              ))
            }
          </ul>
        </Col>
      </Container>
    );
  }
};
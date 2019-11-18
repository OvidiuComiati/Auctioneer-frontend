import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

export default class Statistics extends React.Component {
    render() {
        return (
            <Container className="stat__container" style={{marginLeft:"20%"}}>
                <h1 style={{fontSize:"30px"}}>Statistics</h1>
                <Row >
                    <Col sm={3}>
                        <h3 className="stat__title">Top Bids</h3>
                        {
                            (this.props.sortedBids.slice(0, 3)).map((bid) => (
                                <p className="text">${bid.amount} {bid.bidder}</p>
                            )
                            )

                        }
                    </Col>
                    <Col sm={3}>
                        <h3 className="stat__title">Top Bid Amount</h3>
                        <p className="text">You: ${this.props.sumHuman}</p>
                        <p className="text">Computer: ${this.props.sumComputer}</p>
                    </Col>
                    <Col sm={3}>
                        <h3 className="stat__title">Over Bidding</h3>
                        <p className="text">You: {this.props.overbidingHuman}$</p>
                        <p className="text">Computer: {this.props.overbidingComputer}$</p>
                    </Col>
                </Row>
            </Container>
        )
    }

}




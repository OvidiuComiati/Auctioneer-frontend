import React from 'react';
import { Button, InputGroup, FormControl, Form, Col, Row, Card, Container } from 'react-bootstrap'
import MyModal from './Modal'

export default class AuctionHouse extends React.Component {

    state = {
        timer: parseInt(this.props.duration, 10) || 60,
        currentOffer: this.props.currentOffer || 0,
        winner: 'Computer',
        formtext: '',
        modal: false
    }

    handlePlaceBid = (e) => {
        e.preventDefault();
        //console.log(this.amount)
        console.log(this.state.formtext)
        const amount = this.state.formtext.trim();

        this.props.handleAddBidHuman(Number(amount));
        this.setState((prevState) => ({
            currentOffer: prevState.currentOffer + parseInt(amount, 10),
            winner: 'Human'
        }))

        document.querySelector('#computerButton').click();
    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    handleComputerBid = () => {

        setTimeout(() => {
            const amount = this.getRandomInt(0, 20);
            if (amount === 0) {
                console.log('computer skipped')
                return 'skipped'
            }

            this.props.handleAddBidComputer(amount)

            this.setState((prevState) => ({
                currentOffer: prevState.currentOffer + amount,
                winner: 'Computer'
            }))

        }, this.getRandomInt(5, 10) * 1000)
    }
     closeModal = () => {
        this.setState({modal:false})
    }

    render() {
        return (

            <Container styles={{display:"flex","flex-direction":"column", "align-content": "center"}}>
            <Col>
                <h1 className="auctionHouse__title">Auction House</h1>

                <Card border="primary" style={{ width: 500, height: 200, marginLeft:"25%" }} >
                    <Container className="auctionHouse__box">
                        <Row>
                            <Col sm={4}>
                                <h3 className="title">Current Offer</h3>
                                <Card border="dark" text="black" className="auctionHouse__currentAmount" >

                                    <Card.Text style={{ "marginTop": "25px" }}>
                                        {this.state.currentOffer} $
                                    </Card.Text>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Container className="auctionHouse__left">
                                    <Col sm={12}>
                                        <h3 className="title">Time Left</h3>
                                        <Container fluid={true}>
                                            <Row>
                                                <Col sm={6}>
                                                    
                                                        <Card className="auctionHouse__timer" style={{"backgroundColor": "#DCDCDC"}}>
                                    
                                                            <Card.Text >Time Left</Card.Text>
                                                            
                                                        </Card>
                                                    
                                                </Col>
                                                <Col sm={6}>
                                                    <Card className="auctionHouse__timer">
                                                        <Card.Text>{this.state.timer}s</Card.Text>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Container>

                                        <h3 className="title">Current winnner</h3>
                                        <Container>
                                            <Row>
                                                <Col sm={4}>
                                                    <Card
                                                        className="auctionHouse__winner"
                                                        border={this.state.winner === 'Human' ? "secondary" : ""}
                                                        bg={this.state.winner === 'Human' ? "success" : ""}
                                                        text={this.state.winner === 'Human' ? "white" : "black"}
                                                        style={{ width: 52, height: 37 , "backgroundColor": "#DCDCDC"}}
                                                    >
                                                        <Card.Title  style={{margin: "8px", "fontSize": "medium"}}>You</Card.Title>
                                                    </Card>
                                                </Col>
                                                <Col sm={8}>
                                                    <Card
                                                        className="auctionHouse__winner"
                                                        border={this.state.winner === 'Computer' ? "secondary" : ""}
                                                        bg={this.state.winner === 'Computer' ? "success" : ""}
                                                        text={this.state.winner === 'Computer' ? "white" : "black"}
                                                        style={{ width: 95, height: 37, "backgroundColor": "#DCDCDC" }}
                                                    >
                                                        <Card.Title style={{margin: "8px", "fontSize": "medium"}}>Computer</Card.Title>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Card>

                <br></br>
                <Container style={{marginBottom:"30px", maxWidth:"500px"}}>
                    <h3 className="bid__title" style={{ textAlign:"center"}}>Place your bid</h3>
                    <Row>
                        <Col sm={7}>
                            <Form>

                                <Form.Row>
                                    <InputGroup  >
                                        <InputGroup.Prepend>
                                            <InputGroup.Text style={{"fontSize": "15px"}}>$</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl type="number" onChange={(e) => { e.preventDefault(); this.state.formtext = e.target.value }} style={{ height: 40, width: 200 ,"fontSize": "15px" }} aria-label="Amount (to the nearest dollar)" placeholder="Amount" />
                                    </InputGroup>
                                </Form.Row>
                            </Form>
                        </Col>
                        <Col sm={5}>
                            <Button
                                onClick={this.handlePlaceBid}
                                variant="primary"
                                id="humanButton"
                                style={{ height: 40, width: 120 , "fontSize": "15px"}}
                            >
                                Bid Amount
                            </Button>
                        </Col>
                    </Row>
                    <button hidden={true} id="computerButton" onClick={this.handleComputerBid} />


                </Container>
                </Col>
                <MyModal show={this.state.modal} winner={this.state.winner}/>
            </Container>
            
        )
    }
    tick = () => {
        console.log(this.state.timer)
        if (this.state.timer > 0) {
            this.setState((prevState) => ({
                timer: prevState.timer - 1
            }))
        } else {
            clearInterval(this.myInterval);
            this.props.handleResetAuction();
            this.setState({modal:true})
            document.querySelector('#computerButton').disabled = true;
            document.querySelector('#humanButton').disabled = true;
            //alert('winner: ' + this.state.winner);
            
        }
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.tick();
        }, 1000)
    }


}

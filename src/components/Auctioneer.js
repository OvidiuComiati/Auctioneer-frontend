import React from 'react';
import AuctionHouse from './AuctionHouse';
import Header from './Header';
import BidHistory from './BidHistory'
import Statistics from './Statistics';
import axios from 'axios'
import {CardColumns} from 'react-bootstrap'
import Footer from './Footer';

export default class Auctioneer extends React.Component {

    state = {
        currentOffer: 0,
        bidHistoryHuman: 0,
        bidHistoryComputer: 0,
        overbidingHuman: 0,
        overbidingComputer: 0,
        bidHistory: [],
        sortedBids: []
    };

    handleAddBidHuman = (amount) => {
        if (amount < 0) {
            return 'Enter a valid amount';
        }

        axios.post('http://localhost:3000/human', { amount }).then(response => {
            console.log(response.data)
            this.setState({
                currentOffer: response.data.currentOffer,
                bidHistoryHuman: response.data.bidsHuman,
                bidHistoryComputer: response.data.bidsComputer,
                overbidingHuman: response.data.overbidingHuman,
                overbidingComputer: response.data.overbidingComputer,
                bidHistory: response.data.bids,
                sortedBids: response.data.sortedBids
            })
        })

        this.render()
    }
    handleAddBidComputer = (amount) => {
        if (amount < 0) {
            return 'Enter a valid amount';
        }

        axios.post('http://localhost:3000/computer', { amount }).then(response => {
            
            console.log(response.data)
            
            this.setState({
                currentOffer: response.data.currentOffer,
                bidHistoryHuman: response.data.bidsHuman,
                bidHistoryComputer: response.data.bidsComputer,
                overbidingHuman: response.data.overbidingHuman,
                overbidingComputer: response.data.overbidingComputer,
                bidHistory: response.data.bids,
                sortedBids: response.data.sortedBids
            });
        })

        this.render();
    }
    handleResetAuction = () => {
        axios.post('http://localhost:3000/reset', {}).then(response => {
            this.setState({
                currentOffer: 0,
                bidHistoryHuman: 0,
                bidHistoryComputer: 0,
                overbidingHuman: 0,
                overbidingComputer: 0,
                bidHistory: [],
                sortedBids: []
            });
        })
    }
 

    render() {
        return (
            <div style={{backgroundColor:"#c6d9ec"}}>
                
                <Header />
                <div style={{marginLeft:"10%", marginRight:"10%", backgroundColor:"white"}}>
                    <AuctionHouse
                        handleAddBidHuman={this.handleAddBidHuman}
                        handleAddBidComputer={this.handleAddBidComputer}
                        duration={10}
                        handleResetAuction={this.handleResetAuction}
                    />
                    <BidHistory
                        numberOfBids={this.state.bidHistory.length}
                        bids={this.state.bidHistory}

                    />
                    <Statistics
                        sortedBids={this.state.sortedBids}
                        sumHuman={this.state.bidHistoryHuman}
                        sumComputer={this.state.bidHistoryComputer}
                        overbidingComputer={this.state.overbidingComputer}
                        overbidingHuman={this.state.overbidingHuman}
                    />
                </div>
                <Footer />
            </div>
        )
    }
}
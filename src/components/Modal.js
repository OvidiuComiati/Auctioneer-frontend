import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class MyModal extends React.Component {
    state={
        show: undefined
    }
    closeModal = () => {
        this.setState({show: false})
    }
    render() {
        return (
            <div>

                <Modal show={ this.state.show ? this.state.show : this.props.show} >
                    <Modal.Header closeButton >
                        <Modal.Title style={{textAlign:"center"}}>{this.props.winner} is the winner!!!</Modal.Title>
                    </Modal.Header>
                
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
            </Button>
                        <Button variant="primary" onClick={this.closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


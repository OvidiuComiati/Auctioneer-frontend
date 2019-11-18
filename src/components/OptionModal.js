import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
    return (
        <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleDeleteSelectedOption}// when clicking background or esc
        constentLabel="selected option"
        closeTimeoutMS={200}
        className="modal">
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleDeleteSelectedOption}>Okay</button>
        </Modal>
    )
}

export default OptionModal
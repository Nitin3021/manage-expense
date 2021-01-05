import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        appElement={document.getElementById('app')}
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>OK</button>
    </Modal>
);

export default OptionModal;
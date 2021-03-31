import React from 'react';
import Modal from 'react-modal';

const ModalDeletion = (props) => (
    <Modal
        appElement={document.getElementById('app')}
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Warning!"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Warning!</h3>
        <p className="modal-paragraph">All expenses under the group will be deleted as well. Proceed?</p>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button button--left" onClick={props.onRemoveGroup}>OK</button>
        <button className="button button--right" onClick={props.handleClearSelectedOption}>Cancel</button>
    </Modal>
);

export default ModalDeletion;
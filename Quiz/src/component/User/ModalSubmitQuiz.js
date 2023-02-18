import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalSubmitQuiz(props) {
    const { show, setShow, dataSubmitQuiz } = props
    const handleClose = () => setShow(false);
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Result</Modal.Title>
                </Modal.Header>
                <Modal.Body className='result-answer'>
                    <div> Total Question:<b> {dataSubmitQuiz.countTotal}</b></div>
                    <div> Total Correct Answer:<b> {dataSubmitQuiz.countCorrect}/{dataSubmitQuiz.countTotal}</b></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" >
                        Show Answer
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalSubmitQuiz

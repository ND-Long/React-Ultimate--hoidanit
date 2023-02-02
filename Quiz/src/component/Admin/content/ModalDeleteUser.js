import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Content.css"
import _ from "lodash"

function ModalDeleteUser(props) {
    const { show, onClickClose, fetchListUsers, inforUserUpdate, resetDataUpdate } = props
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')



    //clode modal
    const handleClose = () => {
        console.log(">>>>Click close View User")
        onClickClose();
        setEmail("");
        setPassword("");
        setUsername("");
        setRole('USER');
        setPreviewImage('')
        setImage('')
        resetDataUpdate()
    }

    useEffect(() => {
        if (!_.isEmpty(inforUserUpdate)) {
            setEmail(inforUserUpdate.email);
            setPassword(inforUserUpdate.password);
            setUsername(inforUserUpdate.username);
            setRole(inforUserUpdate.role)
            setPreviewImage(`data:image/png;base64, ${inforUserUpdate.image}`)
            // console.log(`data:image/png;base64, ${inforUserUpdate.image}`)
        }
    }, [inforUserUpdate])




    return (
        <>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete The User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure delete this user. email = <b>{inforUserUpdate.email}</b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser





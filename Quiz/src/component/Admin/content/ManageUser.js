import ModalCreateuser from "./ModalCreateuser"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";
import TableUser from "./TableUser";

const ManageUser = () => {
    const [showModal, setShowModal] = useState(false)
    const handleShow = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }


    return (
        <div className="managerPage user">
            <h3 className="title-manager-user">Manage User</h3>
            <Button variant="primary" onClick={handleShow} className="btn-adduser">
                Add new user
            </Button>
            <ModalCreateuser show={showModal} onClickClose={handleClose} />
            <div>
                <TableUser />
            </div>
        </div>
    )
}

export default ManageUser
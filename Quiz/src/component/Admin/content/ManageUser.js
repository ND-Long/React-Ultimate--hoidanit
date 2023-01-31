import ModalCreateuser from "./ModalCreateuser"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"
import { getAllUser } from "../../services/apiService"
import axios from "axios";
import TableUser from "./TableUser";

const ManageUser = () => {
    const [showModal, setShowModal] = useState(false)
    const [listUsers, setListUsers] = useState(getAllUser())
    const handleShow = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }


    //componentDidmount
    useEffect(async () => {
        fetchListUsers()
    }, [])

    //all api data list user
    const fetchListUsers = async () => {
        let dataGetUser = await getAllUser()
        // console.log(">>>Data all: ", dataGetUser.DT)
        if (dataGetUser.EC == 0) {
            setListUsers(dataGetUser.DT)
        }
    }



    return (
        <div className="managerPage user">
            <h3 className="title-manager-user">Manage User</h3>
            <Button variant="primary" onClick={handleShow} className="btn-adduser">
                Add new user
            </Button>
            <ModalCreateuser
                show={showModal}
                onClickClose={handleClose}
                fetchListUsers={fetchListUsers}
            />
            <div>
                <TableUser listUsers={listUsers} />
            </div>
        </div>
    )
}

export default ManageUser
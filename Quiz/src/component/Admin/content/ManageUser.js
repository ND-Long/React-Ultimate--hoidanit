import ModalCreateuser from "./ModalCreateuser"
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"
import { getAllUser } from "../../services/apiService"
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = () => {
    const [showModal, setShowModal] = useState(false)
    const [showModalUpdate, setShowModalUpdate] = useState(false)
    const [inforUserUpdate, setInforUserUpdate] = useState([])
    const [listUsers, setListUsers] = useState([])
    const handleShow = () => {
        setShowModal(true)
    }
    const handleShowUpdate = (item) => {
        setShowModalUpdate(true)
        setInforUserUpdate(item)
    }
    const handleClose = () => {
        setShowModal(false)
    }
    const handleCloseUpdate = () => {
        setShowModalUpdate(false)
    }


    //componentDidmount
    useEffect(() => {
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
            <ModalUpdateUser
                show={showModalUpdate}
                onClickClose={handleCloseUpdate}
                inforUserUpdate={inforUserUpdate}
            />
            <div>
                <TableUser listUsers={listUsers} onClickShowUpdate={handleShowUpdate} />
            </div>
        </div>
    )
}

export default ManageUser
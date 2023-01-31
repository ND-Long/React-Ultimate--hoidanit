import { useEffect, useState } from "react"
import { getAllUser } from "../../services/apiService"
import React from "react"
import { async } from "q"



const TableUser = () => {
    const [listUsers, setListUsers] = useState(getAllUser())

    //componentDidmount
    useEffect(async () => {
        fetchListUsers()
    }, { listUsers })

    //all api data list user
    const fetchListUsers = async () => {
        let dataGetUser = await getAllUser()
        console.log(">>>Data all: ", dataGetUser.DT)
        if (dataGetUser.EC == 0) {
            setListUsers(dataGetUser.DT)
        }
    }


    return (
        <>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`table-user-${item.id}`}>
                                    <th >{index + 1}</th>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-info mx-1">View</button>
                                        <button className="btn btn-warning mx-1">Update</button>
                                        <button className="btn btn-danger mx-1">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {
                        listUsers && listUsers.length === 0 &&
                        <tr>
                            <td colSpan={4}>Note found data</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableUser
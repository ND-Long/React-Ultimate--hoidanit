import React from "react"




const TableUser = (props) => {
    const { listUsers, onClickShowUpdate } = props
    const handleClickShowUpdate = (item) => {
        onClickShowUpdate(item)

    }
    return (
        <>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
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
                                    <th >{item.id}</th>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-info mx-1" >View</button>
                                        <button className="btn btn-warning mx-1" onClick={() => handleClickShowUpdate(item)}>Update</button>
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
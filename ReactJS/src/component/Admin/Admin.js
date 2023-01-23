import SideBar from './Sidebar';
import { FaBars } from 'react-icons/fa';
import "./Admin.css"
import { useState } from 'react';
import React from 'react';
import DashBoard from './content/DashBoard';
import ManageUser from './content/ManageUser';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="container-admin">
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="sidebar-admin">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="content-admin">
                <div className='title-admin'>
                    <FaBars className='farbar' onClick={() => setCollapsed(!collapsed)} />
                </div>
                <div className='content-admin-in'>
                    <Outlet />
                </div>

            </div>
        </div >
    )
}

export default Admin
import SideBar from './Sidebar';
import { FaBars } from 'react-icons/fa';
import "./Admin.css"
import { useState } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'

const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="container-admin">

            <div className="sidebar-admin">
                <SideBar collapsed={collapsed} />
            </div>

            <div className="content-admin">
                <div className='title-admin'>
                    <FaBars className='farbar' onClick={() => setCollapsed(!collapsed)} />
                </div>
                <PerfectScrollbar>
                    <div className='content-admin-in  container'>
                        <Outlet />
                    </div>
                </PerfectScrollbar>
            </div>

        </div >
    )
}

export default Admin
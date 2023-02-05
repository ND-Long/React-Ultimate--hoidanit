import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './component/Admin/Admin';
import User from './component/User/User';
import Home from './component/Home/Home';
import DashBoard from './component/Admin/content/DashBoard';
import ManageUser from './component/Admin/content/ManageUser';
import ManageQuiz from './component/Admin/content/ManageQuiz';
import ManageQuestion from './component/Admin/content/ManageQuestion';
import Login from './component/Auth/Login';
import Signup from './component/Auth/Signup';
import App from './App';
import { ToastContainer, toast } from 'react-toastify';

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="/user" element={<User />} />
                </Route>

                <Route path="/admin" element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path="/admin/manage-user" element={<ManageUser />} />
                    <Route path="/admin/manage-quiz" element={<ManageQuiz />} />
                    <Route path="/admin/manage-question" element={<ManageQuestion />} />
                </Route>

                <Route path="/login" element={<Login />}>

                </Route>

                <Route path="/signup" element={<Signup />} >

                </Route>
            </Routes>
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
        </>
    )
}

export default Layout;
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './component/Admin/Admin';
import User from './component/User/User';
import Home from './component/Home/Home';
import DashBoard from './component/Admin/content/DashBoard';
import ManageUser from './component/Admin/content/ManageUser';
import ManageQuiz from './component/Admin/content/ManageQuiz';
import ManageQuestion from './component/Admin/content/ManageQuestion';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
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
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { doLogout } from "../../redux/action/userAction";

const Header = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const user = useSelector(state => state.user.account)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/login")
    }
    const handleSignup = () => {
        navigate("/signup")
    }

    const handleLogout = () => {
        dispatch(doLogout())
        navigate("/login")
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    Quiz Test
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >

                        {
                            isAuthenticated == true ?
                                <>
                                    <NavLink to="/" className="nav-link">Home</NavLink>
                                    <NavLink to="/admin" className="nav-link">Admin</NavLink>
                                    <NavLink to="/user" className="nav-link">User</NavLink>
                                </> :
                                <>
                                </>
                        }
                    </Nav>
                    <Nav>
                        {isAuthenticated == false ?
                            <>
                                <button className='btn-login' onClick={() => handleLogin()} >Log In</button>
                                <button className='btn-signup' onClick={() => handleSignup()} >Sign Up</button>
                            </>
                            :
                            <NavDropdown title="Settings" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => handleLogout()}>Log Out</NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}


export default Header;
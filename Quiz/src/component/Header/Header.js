import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    Quiz Test
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/admin" className="nav-link">Admin</NavLink>
                        <NavLink to="/user" className="nav-link">User</NavLink>
                    </Nav>
                    <Nav>

                        <button className='btn-login'>Log In</button>
                        <button className='btn-signup'>Sign Up</button>
                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item>Login</NavDropdown.Item>
                            <NavDropdown.Item>Log Out</NavDropdown.Item>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}


export default Header;
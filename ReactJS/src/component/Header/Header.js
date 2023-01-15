import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Quiz By Long</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#user">User</Nav.Link>
                        <Nav.Link href="#admin">Admin</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#LogIn">
                                Login
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#LogOut">
                                Log Out
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#Profile">
                                Profile
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;
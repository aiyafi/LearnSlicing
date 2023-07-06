import React from 'react'
import "./header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "/src/assets/logo.svg"

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="ClarityUILogo" />
                    </Navbar.Brand>
                    <Nav.Link href="#home" className="nav-link">Products</Nav.Link>
                    <Nav.Link href="#link" className="nav-link">Features</Nav.Link>
                    <Nav.Link href="#link" className="nav-link">Pricing</Nav.Link>
                    <Nav.Link href="#link" className="nav-link">Support</Nav.Link>
                    <button type="button" className="btn btn-outline-dark">Start free trial</button>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineSearch } from 'react-icons/ai'

import Form from 'react-bootstrap/Form';

const NavBar = ({ handleSearchQuery }) => {


    return (
        <div >
            <Navbar bg="white" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home" className='fs-1 fw-bold text-dark'>Fe<span className='text-primary'>ed</span></Navbar.Brand>
                    <Nav className="ms-auto position-relative">
                        <div className="position-relative d-flex align-items-center">
                            <div className="input-wrapper w-100">
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com" className='ps-5'
                                    style={{ background: "white", color: "gray" }}
                                    onChange={handleSearchQuery}
                                />
                                <AiOutlineSearch className="ms-2 fs-4  position-absolute start-0 top-50 translate-middle-y" style={{ color: "light-grey" }} />

                            </div>
                        </div>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className='text-dark'>Home</Nav.Link>
                        <Nav.Link href="#features" className='text-dark'>Features</Nav.Link>
                        <Nav.Link href="#pricing" className='text-dark'>Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
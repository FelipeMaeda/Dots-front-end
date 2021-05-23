import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Menu = (props) => {
  return (
    <>
      <div className="menu-container">
        <Navbar className="navbar-custom" variant="secundary">
                <Nav.Link className="logo" href="#home">
                  <Image
                    src="/logo.png"
                    alt="Picture of the author"
                    width={250}
                    height={250}
                  />
                </Nav.Link>
                <Nav className="mr-auto">
                <Nav.Link href="#/computadores">PC HOME</Nav.Link>
                <Nav.Link href="#/computadores">PC GAMER</Nav.Link>
                <Nav.Link href="#/montagem">MONTAGEM</Nav.Link>
                <Nav.Link href="#/contato">CONTATO</Nav.Link>
                <Nav.Link href="#/sobre">SOBRE</Nav.Link>
            </Nav>
        </Navbar>
        <br />
      </div>
    </>
  );
}

export default Menu;
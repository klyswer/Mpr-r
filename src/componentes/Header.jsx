import React, { Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './styles/header.css';

const logo = `${process.env.PUBLIC_URL}/images/LOGO_RYR.png`

class Header extends Component {
  
  render() {
    return (
      <>
        <Navbar className="bg_pr"  fixed="top" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="btn_header" href="#Productos">Productos</Nav.Link>
              <Nav.Link className="btn_header" href="#Direccion">Dirección</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="btn_header">ventas@detergentesryr.cl</Nav.Link>
              <Nav.Link className="btn_header" eventKey={2}>
                +56 2 2643 4128
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;

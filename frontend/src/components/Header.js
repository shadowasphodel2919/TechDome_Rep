import { useState } from "react";
import { Button, Carousel, Card , Navbar , Nav , Container, NavDropdown} from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LeftTab = () => {
  const {username, email, mobile, fields} = useAuth();
  console.log("Userlogged: " +username);
  const notLogged = (
    <>
    <Nav.Link className="header-link" as={Link} to="signup">Sign Up</Nav.Link>
    <Nav.Link className="header-link" as={Link} to="login">Login</Nav.Link>
    </>
  )
  const logged = (
    <>
    <Nav.Link className="header-link" as={Link} to="dash">{username}</Nav.Link>
    </>
  )
  if(!username)return notLogged;
  else return logged;
}
const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href='./'>
              <img
                alt='logo'
                src="./logo-color.svg"
                width="30"
                className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="header-link" as={Link} to="#">  </Nav.Link>
              </Nav>
              <Nav className="justify-content-end">
              <LeftTab />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    );
};

export default Header

/**
 * <header className="primary-header flex">
          <div>
            <img className="logo" src="logo-color.svg"></img>
          </div>
          <nav>
            <ul id="primary-navigation" className="primary-navigation flex">
              <li className="active">
                <a href="/signup">
                  <span aria-hidden="true">00</span>SignUp
                </a>
              </li>
              <li className="active">
                <a href="/login">
                  <span aria-hidden="true">01</span>Login
                </a>
              </li>
            </ul>
          </nav>
        </header>
 */
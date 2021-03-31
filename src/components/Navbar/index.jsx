import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header({ routes = [] }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Todo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {routes.map(({ name, path }) => (
              <Nav.Link key={path} as={Link} className="nav-link" to={path}>{name}</Nav.Link>

            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

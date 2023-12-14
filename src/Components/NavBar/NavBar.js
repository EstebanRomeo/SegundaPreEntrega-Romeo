import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <>
      
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand to="/"> LaPizza </Navbar.Brand>
            <Nav className="container">
              <Link to="/">Inicio</Link>
              <Link to="/categoria/normales">Normales</Link>
              <Link to="/categoria/vegetales">Con Vegetales</Link>
              <Link to="/categoria/especiales">Especiales</Link>

            </Nav>
     
        </Container>
        <Link to="/cart"> <CartWidget/> </Link>
      </Navbar>
      </>
  );
}

export default NavBar;
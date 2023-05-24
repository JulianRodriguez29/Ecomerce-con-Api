import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.png';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#" className="mr-auto">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-center"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="d-flex justify-content-end text-end ml-auto">
          <Nav.Link href="#">Entradas</Nav.Link>
            <Nav.Link href="#">Platillos Fuertes</Nav.Link>
            <Nav.Link href="#">Bebidas</Nav.Link>
            <Nav.Link href="#"><FontAwesomeIcon icon={faShoppingCart} size="lg"/></Nav.Link>
            <Button variant="outline-light btn-sm">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;




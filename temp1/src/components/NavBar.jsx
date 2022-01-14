import  Navbar  from "react-bootstrap/NavBar"
import  Container from "react-bootstrap/Container"
import  Nav  from "react-bootstrap/Nav"
import  NavDropdown  from "react-bootstrap/NavDropdown"
import { CartWidget } from "./CartWidget/CartWidget"




const NavBar = () => {

    return(<Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home"> Bajoneros Fast Food</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Contacto</Nav.Link>
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Hamburguesas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Veggie</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Combos</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      
      <Nav.Link  > 
        <CartWidget/>
      </Nav.Link>
    </Container>
  </Navbar>
    
    )

    
}

export default NavBar
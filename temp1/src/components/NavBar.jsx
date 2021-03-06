
import  Navbar  from "react-bootstrap/Navbar"
import  Container from "react-bootstrap/Container"
import  Nav  from "react-bootstrap/Nav"
import  NavDropdown  from "react-bootstrap/NavDropdown"
import { CartWidget } from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"




const NavBar = () => {

  const { cantidad } = useCartContext()

    return(<Navbar  className='navbar' bg="dark" variant="dark" expand="lg">
    <Container>
      <Link to='/'>
      <Navbar.Brand href="#home"> Bajoneros Fast Food</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <Link to='/categoria/Hamburguesas'>
            <NavDropdown.Item href="#action/3.2">Hamburguesas</NavDropdown.Item>
            </Link>
            <Link to='/categoria/Veggie'>
            <NavDropdown.Item href="#action/3.3">Veggie</NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
           
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      
     <Link to='/cart'>
     { cantidad () !== 0 && cantidad()}
        <CartWidget/>
        </Link>
   
    </Container>
  </Navbar>
    
    )

    
}

export default NavBar
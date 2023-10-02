
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'

function FurnitureNav() {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Furniture shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/furniture/list">Living Room</Nav.Link>
              <Nav.Link href="/furniture/list">Bed Room</Nav.Link>
              <Nav.Link href="/furniture/list">Kitchen</Nav.Link>
              <Nav.Link href="/furniture/list">Kids</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default FurnitureNav

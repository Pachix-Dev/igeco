import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useTranslation } from 'react-i18next'
import './Menu.css'
export function Menu () {
  const { t } = useTranslation()
  return (
    <>
      <Navbar expand='lg' className='igeco-menu mb-3'>
        <Container>
          <Navbar.Brand href='#'>
            <img src='/img/igecoLogo.webp' alt='IGECO' width='300' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-lg'
            aria-labelledby='offcanvasNavbarLabel-expand-lg'
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='#action1'>Home</Nav.Link>
                <Nav.Link href='#action2'>Link</Nav.Link>
                <NavDropdown
                  title='Dropdown'
                  id='offcanvasNavbarDropdown-expand-lg'
                >
                  <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

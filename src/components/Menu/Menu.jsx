import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useTranslation } from 'react-i18next'
import './Menu.css'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react'
export function Menu () {
  const { t, i18n } = useTranslation()
  const [show, setShow] = useState()
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <>
      <Navbar expand='lg' className='igeco-menu mb-3'>
        <Container>
          <Navbar.Brand href='#'>
            <img src='/img/igecoLogo.webp' alt='IGECO' width='300' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' onClick={handleShow} />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-lg'
            aria-labelledby='offcanvasNavbarLabel-expand-lg'
            placement='end'
            show={show}
          >
            <Offcanvas.Header closeButton onClick={handleClose} />
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <NavDropdown
                  title={t('menu.item_1.title')}
                  id='offcanvasNavbarDropdown-expand-lg'
                  renderMenuOnMount disabled
                >
                  <NavDropdown.Item href='#action3'>{t('menu.item_1.dropdown_1')}</NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>
                    {t('menu.item_1.dropdown_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action5'>
                    {t('menu.item_1.dropdown_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item href='#action5'>
                    {t('menu.item_1.dropdown_4')}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t('menu.item_2.title')}
                  id='offcanvasNavbarDropdown-expand-lg'
                  className='igeco-menu-dropdown'
                  renderMenuOnMount disabled
                >
                  <Row>
                    <Col>
                      <p className='mt-2 ps-3 mb-0'><strong>{t('menu.item_2.subtitle_1')}</strong></p>
                      <NavDropdown.Item href='#action3' onClick={handleClose}>{t('menu.item_2.dropdown_1')}</NavDropdown.Item>
                      <NavDropdown.Item href='#action4' onClick={handleClose}>
                        {t('menu.item_2.dropdown_2')}
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action5' onClick={handleClose}>
                        {t('menu.item_3.dropdown_3')}
                      </NavDropdown.Item>
                      <NavDropdown.Item href='#action5' onClick={handleClose}>
                        {t('menu.item_1.dropdown_4')}
                      </NavDropdown.Item>
                    </Col>
                    <Col>
                      <p className='mt-2 ps-3 mb-0'><strong>{t('menu.item_2.subtitle_2')}</strong></p>
                    </Col>
                  </Row>
                </NavDropdown>
                <Nav.Link href='#action2' onClick={handleClose}>{t('menu.item_3')}</Nav.Link>
                <Nav.Link href='#action2' onClick={handleClose}>{t('menu.item_4')}</Nav.Link>
                <Navbar.Text className='language-option'>
                  <img src='/img/iconLanguage.webp' width={19} height={19} alt='languages' />
                  <button onClick={() => i18n.changeLanguage('es')} style={{ color: i18n.language === 'en' ? 'black' : '' }}>Es</button>
                  /
                  <button onClick={() => i18n.changeLanguage('en')} style={{ color: i18n.language === 'es' ? 'black' : '' }}>En</button>

                </Navbar.Text>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

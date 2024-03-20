import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useTranslation } from 'react-i18next'
import './Menu.css'
import { Col, Dropdown, Row } from 'react-bootstrap'

import { useState } from 'react'
import { Link } from 'react-router-dom'
export function Menu() {
  const { t, i18n } = useTranslation()
  const [show, setShow] = useState()
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  return (
    <>
      <Navbar expand='lg' className='igeco-menu'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src='/img/igecoLogo.webp' alt='IGECO' width='300' />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='offcanvasNavbar-expand-lg'
            onClick={handleShow}
          />
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
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item as={Link} to='/history'>
                    {t('menu.item_1.dropdown_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/about-us'>
                    {t('menu.item_1.dropdown_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/areas-of-expertise'>
                    {t('menu.item_1.dropdown_4')}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t('menu.item_2')}
                  className='igeco-menu-dropdown'
                  renderMenuOnMount
                  disabled
                >
                  <Row>
                    <Col>
                      <p className='mt-2 ps-3 mb-4'>
                        <strong>{t('menu.item_3')}</strong>
                      </p>
                      {/*<NavDropdown.Item
                        href='https://www.hfmexico.mx/MEMIndustrial/'
                        target='_blank'
                        onClick={handleClose}
                      >
                        MEM Industrial
                      </NavDropdown.Item>*/}
                      <NavDropdown.Item
                        href='https://www.hfmexico.mx/solarpowermexico/es/'
                        target='_blank'
                        onClick={handleClose}
                      >
                        Solar + Storage Mexico
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href='https://hfmexico.mx/ecomondo/'
                        target='_blank'
                        onClick={handleClose}
                      >
                        Ecomondo México
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href='https://industrialtransformation.mx/'
                        target='_blank'
                        onClick={handleClose}
                      >
                        Industrial Transformation Mexico
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href='https://viveelvino.igeco.mx/'
                        target='_blank'
                        onClick={handleClose}
                      >
                        Vive el Vino
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href='https://amofexpo.igeco.mx/'
                        target='_blank'
                        onClick={handleClose}
                      >
                        America's Mobility of the Future
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href='https://hfmexico.mx/agrotechmexico/'
                        target='_blank'
                        onClick={handleClose}
                      >
                        Agrotech Mexico
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href='https://hfmexico.mx/worldseafood/'
                        target='_blank'
                        onClick={handleClose}
                      >
                        World Seafood Industry
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href='https://www.macsexpo.mx/'
                        target='_blank'
                        onClick={handleClose}
                      >
                        MACS
                      </NavDropdown.Item>
                    </Col>
                    <Col>
                      <p className='mt-2 ps-3 mb-4 text-center'>
                        <strong>{t('menu.item_4')}</strong>
                      </p>
                      <div className='d-sm-flex'>
                        <div>
                          <NavDropdown.Item
                            href='https://www.hannovermesse.de/en/'
                            target='_blank'
                            onClick={handleClose}
                          >
                            Hannover Messe
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href='https://electricity-transformation.ca/'
                            target='_blank'
                            onClick={handleClose}
                          >
                            Electricity Transformation Canada
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href='https://cematseasia.com/'
                            target='_blank'
                            onClick={handleClose}
                          >
                            CeMAT South East Asia
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href='https://www.domotex.de/en/'
                            target='_blank'
                            onClick={handleClose}
                          >
                            Domotex
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href='https://www.interschutz.de/en/'
                            target='_blank'
                            onClick={handleClose}
                          >
                            INTERSCHUTZ
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href='https://www.iaa-transportation.com/de'
                            target='_blank'
                            onClick={handleClose}
                          >
                            IAA TRANSPORTATION
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href='https://www.afacconference.com.au/'
                            target='_blank'
                            onClick={handleClose}
                          >
                            AFAC
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href='https://www.ligna.de/en/'
                            target='_blank'
                            onClick={handleClose}
                          >
                            Ligna
                          </NavDropdown.Item>
                        </div>
                        <div className='italianexhibition_link'>
                          <p>ITALIAN EXHIBITION GROUP</p>
                          <a
                            href='https://www.iegexpo.it/en/exhibitions'
                            target='_blank'
                          >
                            {t('menu.see_more')}{' '}
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              width={20}
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </NavDropdown>
                <Nav.Link
                  href='https://hfmexico.mx/messe-events/'
                  target='_blank'
                  onClick={handleClose}
                >
                  {t('menu.item_5')}
                </Nav.Link>

                <Dropdown data-bs-theme='dark'>
                  <Dropdown.Toggle id='dropdown-basic' variant='secondary'>
                    <svg
                      height='24'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        clipRule='evenodd'
                        d='m7.10319 18.721c1.44393.8125 3.11001 1.2768 4.88431 1.279-.2692 0-.4875.2183-.4875.4875v.5125c0 .5523-.4477 1-1 1h-3c-.27614 0-.5.2239-.5.5s.22386.5.50001.5h8.99999c.2761 0 .5-.2239.5-.5s-.2239-.5-.5-.5h-3c-.5523 0-1-.4477-1-1v-.5125c0-.2692-.2183-.4875-.4875-.4875 5.5171-.0068 9.9875-4.4813 9.9875-10.00001 0-3.6579-1.964-6.85708-4.895-8.60058-.231-.13742-.5264-.05181-.6608.18098-.1417.24537-.0501.55823.1926.70441 2.6145 1.57468 4.3632 4.44072 4.3632 7.71519 0 4.97061-4.0294 9.00001-9 9.00001-1.5829 0-3.07031-.4086-4.36257-1.1262-.248-.1377-.56522-.0607-.70705.1849-.13422.2325-.06112.5307.17281.6623zm4.89681-.721c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm0-1c2.4116 0 4.5384-1.2195 5.7973-3.0756l-1.7255-.9962c-1.248 1.9812-2.9042 3.4124-4.5242 4.0574.1496.0096.3004.0144.4524.0144zm6.002-3.3957c.0436-.0724.0859-.1458.1269-.2199zm-1.4302-1.5421 1.7263.9967c.4496-.9242.7019-1.9621.7019-3.0589 0-1.43763-.4334-2.77403-1.1766-3.8857.2517 1.72562-.1596 3.87609-1.2516 5.9479zm-.6659-7.8275c1.4232 1.29546 1.3536 4.36603-.2005 7.3273l-3.0224-1.745zm-.866-.5-3.2229 5.5823-3.02242-1.74497c1.78752-2.8265 4.41182-4.4221 6.24532-3.83733zm-3.7229 6.4483-3.02242-1.74495c-1.55404 2.96125-1.62368 6.03175-.20051 7.32725zm1.1353-7.16862c-1.6199.64499-3.27617 2.07624-4.52413 4.05743l-1.72548-.99621c1.25887-1.85604 3.38567-3.0756 5.79731-3.0756.152 0 .3028.00484.4523.01438zm-6.5821 3.60277c.04159-.07519.08451-.14953.12875-.22299zm1.55798 1.32068-1.72627-.99665c-.44966.92412-.70191 1.96201-.70191 3.05882 0 1.4376.43339 2.774 1.17664 3.8857-.25177-1.7256.15954-3.8761 1.25154-5.94787zm7.77722 4.49017-3.0224-1.745-3.22291 5.5823c1.83351.5847 4.45781-1.0108 6.24531-3.8373z'
                        fillRule='evenodd'
                      />
                    </svg>{' '}
                    {i18n.language === 'es' ? 'ES' : 'EN'}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() =>
                        i18n.changeLanguage(
                          i18n.language === 'es' ? 'en' : 'es'
                        )
                      }
                    >
                      {i18n.language === 'es' ? 'EN' : 'ES'}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

import { Card, Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './AreasExpertise.css'
export function AreasExpertise () {
  const { t } = useTranslation()
  return (
    <Container>
      <div className='mt-5 m-0 row'>
        <div className=' col-md'>
          <img className='object-fit-cover h-100 w-100' src='/img/deutsche-messe-areas.webp' />
        </div>
        <div className='bg-light p-5 col-md'>
          <span className='fst-italic'>DEUTSCHE MESSE</span>
          <h1 className='fw-bold'>Areas of Expertise</h1>
          <p>{t('AreasExpertise.text')}</p>
        </div>
      </div>
      <Row className='mt-5 m-0'>
        <Col md={6} className='mt-4'>
          <Card className='h-100'>
            <Card.Img variant='top' height={350} className='object-fit-cover' src='/img/areas2.webp' />
            <Card.Body>
              <Card.Title>
                <h1 className='fw-bold'>{t('AreasExpertise.title_2')}</h1>
              </Card.Title>
              <span dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_2')) }} />
              <ul className='areasList'>
                <li>
                  <a href='https://www.hannovermesse.de/' target='_blank' rel='noreferrer'>
                    HANNOVER MESSE
                  </a>
                </li>
                <li>
                  <a href='https://www.surface-technology-germany.de/en/' target='_blank' rel='noreferrer'>
                    SurfaceTechnology GERMANY
                  </a>
                </li>
                <li>
                  <a href='https://www.parts2clean.de/en/' target='_blank' rel='noreferrer'>
                    parts2clean
                  </a>
                </li>
                <li>
                  <a href='https://hannovermesseusa.com/' target='_blank' rel='noreferrer'>
                    Hannover Messe USA
                  </a>
                </li>
                <li>
                  <a href='https://www.ptc-asia.com/index.php?lang=en' target='_blank' rel='noreferrer'>
                    PTC Asia
                  </a>
                </li>
                <li>
                  <a href='http://win-automation.com/en' target='_blank' rel='noreferrer'>
                    WIN EURASIA
                  </a>
                </li>
                <li>
                  <a href='http://www.industrial-automation-beijing.com/' target='_blank' rel='noreferrer'>
                    Industrial Automation BEIJING
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mt-4'>
          <Card className='h-100'>
            <Card.Img variant='top' height={350} className='object-fit-cover' src='/img/energy.webp' />
            <Card.Body>
              <Card.Title>
                <h1 className='fw-bold'>
                  {t('AreasExpertise.title_3')}
                </h1>
              </Card.Title>
              <span dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_3')) }} />
              <ul className='areasList'>
                <li>
                  <a href='https://www.hannovermesse.de/de/ausstellung/ausstellungsbereiche/energy-solutions/' target='_blank' rel='noreferrer'>
                    Energy Solutions (HANNOVER MESSE, Hannover, Alemania)
                  </a>
                </li>
                <li>
                  <a href='https://electricitytransformation.ca/' target='_blank' rel='noreferrer'>
                    Electricity Transformation Canada
                  </a>
                </li>
                <li>
                  <a href='https://www.hfmexico.mx/solarpowermexico/' target='_blank' rel='noreferrer'>
                    Solar Power Mexico (México)
                  </a>
                </li>
                <li>
                  <a href='https://www.icci.com.tr/en/icci-home/' target='_blank' rel='noreferrer'>
                    ICCI (Turquía)
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mt-4'>
          <Card className='h-100'>
            <Card.Img variant='top' height={350} className='object-fit-cover' src='/img/Logistica.webp' />
            <Card.Body>
              <Card.Title>
                <h1 className='fw-bold'>{t('AreasExpertise.title_4')}</h1>
              </Card.Title>
              <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_4')) }} />
              <ul className='areasList'>
                <li>
                  <a href='https://www.hannovermesse.de/en/' target='_blank' rel='noreferrer'>
                    HANNOVER MESSE
                  </a>
                </li>
                <li>
                  <a href='https://www.cemat.com.au/' target='_blank' rel='noreferrer'>
                    CeMAT AUSTRALIA
                  </a>
                </li>
                <li>
                  <a href='https://www.cemat-asia.com/index.php?lang=en' target='_blank' rel='noreferrer'>
                    CeMAT ASIA
                  </a>
                </li>
                <li>
                  <a href='https://www.cemat-russia.ru/' target='_blank' rel='noreferrer'>
                    CeMAT RUSSIA
                  </a>
                </li>
                <li>
                  <a href='https://www.cemat-russia.ru/' target='_blank' rel='noreferrer'>
                    CeMAT EURASIA
                  </a>
                </li>
                <li>
                  <a href='https://intralogistica-italia.com/' target='_blank' rel='noreferrer'>
                    INTRALOGISTICA ITALIA
                  </a>
                </li>
                <li>
                  <a href='https://chinalet.cn/' target='_blank' rel='noreferrer'>
                    LET – a CeMAT ASIA event
                  </a>
                </li>
                <li>
                  <a href='https://www.cemat-russia.ru/exhibition/thematics/transpack/' target='_blank' rel='noreferrer'>
                    TRANSPACK RUSSIA
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mt-4'>
          <Card className='h-100'>
            <Card.Img variant='top' height={350} className='object-fit-cover' src='/img/recubrimientoPiso.webp' />
            <Card.Body>
              <Card.Title>
                <h1 className='fw-bold'>{t('AreasExpertise.title_5')}</h1>
              </Card.Title>
              <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_5')) }} />
              <ul className='areasList'>
                <li>
                  <a href='https://www.domotexasiachinafloor.com/' target='_blank' rel='noreferrer'>
                    DOMOTEX asia/CHINAFLOOR (China)
                  </a>
                </li>
                <li>
                  <a href='https://www.domotexturkey.com/en' target='_blank' rel='noreferrer'>
                    DOMOTEX Turkey (Turkey)
                  </a>
                </li>
                <li>
                  <a href='https://domotexusa.com/' target='_blank' rel='noreferrer'>
                    DOMOTEX USA (USA)
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mt-4'>
          <Card className='h-100'>
            <Card.Img variant='top' height={350} className='object-fit-cover' src='/img/transformacionMadera.webp' />
            <Card.Body>
              <Card.Title>
                <h1 className='fw-bold'>{t('AreasExpertise.title_6')}</h1>
              </Card.Title>
              <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_6')) }} />
              <ul className='areasList'>
                <li>
                  <a href='https://www.hfmexico.mx/MEMIndustrial/' target='_blank' rel='noreferrer'>
                    MEM INDUSTRIAL
                  </a>
                </li>
                <li>
                  <a href='http://tecnomueble.com.mx/' target='_blank' rel='noreferrer'>
                    Tecno Mueble
                  </a>
                </li>
                <li>
                  <a href='http://www.ligna-conference.com/' target='_blank' rel='noreferrer'>
                    LIGNA.Conference, China
                  </a>
                </li>
                <li>
                  <a href='https://www.ifmac.net/' target='_blank' rel='noreferrer'>
                    IFMAC
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mt-4'>
          <Card className='h-100'>
            <Card.Img variant='top' height={350} className='object-fit-cover' src='/img/security.webp' />
            <Card.Body>
              <Card.Title>
                <h1 className='fw-bold'>{t('AreasExpertise.title_7')}</h1>
              </Card.Title>
              <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_7')) }} />
              <ul className='areasList'>
                <li>
                  <a href='https://www.interschutz.de/' target='_blank' rel='noreferrer'>
                    INTERSCHUTZ Hannover
                  </a>
                </li>
                <li>
                  <a href='https://www.afacconference.com.au/' target='_blank' rel='noreferrer'>
                    AFAC Australia
                  </a>
                </li>
                <li>
                  <a href='https://www.reasonline.it/' target='_blank' rel='noreferrer'>
                    REAS Italy
                  </a>
                </li>
                <li>
                  <a href='https://www.interschutz.de/de/ueber-uns/interschutz-events-worldwide/china-international-emergency-management-exhibition/' target='_blank' rel='noreferrer'>
                    CEFE China
                  </a>
                </li>
                <li>
                  <a href='http://hfusa.com/interschutzusa/' target='_blank' rel='noreferrer'>
                    INTERSCHUTZ USA
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mt-4'>
          <Card className='h-100'>
            <Card.Img variant='top' height={350} className='object-fit-cover' src='/img/digitalizacion.webp' />
            <Card.Body>
              <Card.Title>
                <h1 className='fw-bold'>{t('AreasExpertise.title_8')}</h1>
              </Card.Title>
              <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_8')) }} />
              <ul className='areasList'>
                <li>
                  <a href='https://www.messe.de/en/' target='_blank' rel='noreferrer'>
                    TWENTY2X
                  </a>
                </li>
                <li>
                  <a href='https://cebitasean.com/' target='_blank' rel='noreferrer'>
                    CEBIT ASEAN Thailand
                  </a>
                </li>
                <li>
                  <a href='https://www.smb-digital.com.au/' target='_blank' rel='noreferrer'>
                    CEBIT AUSTRALIA
                  </a>
                </li>
                <li>
                  <a href='http://internetplus-expo.com/' target='_blank' rel='noreferrer'>
                    Internet+ powered by CEBIT
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mt-4'>
          <Card className='h-100'>
            <Card.Img variant='top' height={350} className='object-fit-cover' src='/img/automotriz.webp' />
            <Card.Body>
              <Card.Title>
                <h1 className='fw-bold'>{t('AreasExpertise.title_9')}</h1>
              </Card.Title>
              <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_9')) }} />
              <ul className='areasList'>
                <li>
                  <a href='https://nacvshow.com/' target='_blank' rel='noreferrer'>
                    North American Commercial Vehicle Show
                  </a>
                </li>
                <li>
                  <a href='https://www.truckworld.ca/' target='_blank' rel='noreferrer'>
                    Truck World
                  </a>
                </li>
                <li>
                  <a href='https://etyl.mx/en/' target='_blank' rel='noreferrer'>
                    Expo Transporte y Logística
                  </a>
                </li>
                <li>
                  <a href='http://www.ccvs.asia/en/' target='_blank' rel='noreferrer'>
                    China Commercial Vehicles Show
                  </a>
                </li>
                <li>
                  <a href='https://www.messe.de/de/messen/cdms-chengdu-motor-show.xhtml' target='_blank' rel='noreferrer'>
                    Chengdu Motor Show
                  </a>
                </li>
                <li>
                  <a href='https://www.messe.de/de/messen/whms-wuhan-motor-show.xhtml' target='_blank' rel='noreferrer'>
                    Wuhan Motor Show
                  </a>
                </li>
                <li>
                  <a href='https://www.iaa-mobility.com/en' target='_blank' rel='noreferrer'>
                    IAA Commercial Vehicles
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mt-4'>
          <Card className='h-100'>
            <Card.Img variant='top' height={350} className='object-fit-cover' src='/img/automotriz.webp' />
            <Card.Body>
              <Card.Title>
                <h1 className='fw-bold'>{t('AreasExpertise.title_9')}</h1>
              </Card.Title>
              <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_9')) }} />
              <ul className='areasList'>
                <li>
                  <a href='https://nacvshow.com/' target='_blank' rel='noreferrer'>
                    North American Commercial Vehicle Show
                  </a>
                </li>
                <li>
                  <a href='https://www.truckworld.ca/' target='_blank' rel='noreferrer'>
                    Truck World
                  </a>
                </li>
                <li>
                  <a href='https://etyl.mx/en/' target='_blank' rel='noreferrer'>
                    Expo Transporte y Logística
                  </a>
                </li>
                <li>
                  <a href='http://www.ccvs.asia/en/' target='_blank' rel='noreferrer'>
                    China Commercial Vehicles Show
                  </a>
                </li>
                <li>
                  <a href='https://www.messe.de/de/messen/cdms-chengdu-motor-show.xhtml' target='_blank' rel='noreferrer'>
                    Chengdu Motor Show
                  </a>
                </li>
                <li>
                  <a href='https://www.messe.de/de/messen/whms-wuhan-motor-show.xhtml' target='_blank' rel='noreferrer'>
                    Wuhan Motor Show
                  </a>
                </li>
                <li>
                  <a href='https://www.iaa-mobility.com/en' target='_blank' rel='noreferrer'>
                    IAA Commercial Vehicles
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mt-4'>
          <Card className='h-100'>
            <Card.Img variant='top' height={350} className='object-fit-cover' src='/img/metal.webp' />
            <Card.Body>
              <Card.Title>
                <h1 className='fw-bold'>{t('AreasExpertise.title_10')}</h1>
              </Card.Title>
              <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_9')) }} />
              <ul className='areasList'>
                <li>
                  <a href='https://nacvshow.com/' target='_blank' rel='noreferrer'>
                    North American Commercial Vehicle Show
                  </a>
                </li>
                <li>
                  <a href='https://www.truckworld.ca/' target='_blank' rel='noreferrer'>
                    Truck World
                  </a>
                </li>
                <li>
                  <a href='https://etyl.mx/en/' target='_blank' rel='noreferrer'>
                    Expo Transporte y Logística
                  </a>
                </li>
                <li>
                  <a href='http://www.ccvs.asia/en/' target='_blank' rel='noreferrer'>
                    China Commercial Vehicles Show
                  </a>
                </li>
                <li>
                  <a href='https://www.messe.de/de/messen/cdms-chengdu-motor-show.xhtml' target='_blank' rel='noreferrer'>
                    Chengdu Motor Show
                  </a>
                </li>
                <li>
                  <a href='https://www.messe.de/de/messen/whms-wuhan-motor-show.xhtml' target='_blank' rel='noreferrer'>
                    Wuhan Motor Show
                  </a>
                </li>
                <li>
                  <a href='https://www.iaa-mobility.com/en' target='_blank' rel='noreferrer'>
                    IAA Commercial Vehicles
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className='mt-4'>
          <Card className='h-100'>
            <Card.Img variant='top' height={350} className='object-fit-cover' src='/img/didacta.webp' />
            <Card.Body>
              <Card.Title>
                <h1 className='fw-bold'>{t('AreasExpertise.title_11')}</h1>
              </Card.Title>
              <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_11')) }} />
              <ul className='areasList'>
                <li>
                  <a href='https://www.messe.de/en/' target='_blank' rel='noreferrer'>
                    didacta-hannover.de
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

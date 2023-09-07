import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './AreasExpertise.css'
export function AreasExpertise () {
  const { t } = useTranslation()
  return (
    <>
      <Row className='mt-5 m-0'>
        <Col md className='parallax-areas-expertise' />
        <Col md className='bg-light p-5'>
          <span className='fst-italic'>DEUTSCHE MESSE</span>
          <h1 className='fw-bold'>{t('AreasExpertise.title')}</h1>
          <p>{t('AreasExpertise.text')}</p>
        </Col>
      </Row>
      <Container fluid className='mt-5'>
        <h1 className='fw-bold'>{t('AreasExpertise.title_2')}</h1>
        <Row className='mt-4'>
          <Col>
            <img src='/img/areas2.webp' alt='industry' className='w-100' />
          </Col>
          <Col>
            <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_2')) }} />
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
          </Col>
        </Row>

        <h1 className='mt-5 fw-bold'>{t('AreasExpertise.title_3')}</h1>
        <Row className='mt-4'>
          <Col>
            <img src='/img/energy.webp' alt='industry' className='w-100' />
          </Col>
          <Col>
            <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_3')) }} />
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
          </Col>
        </Row>

        <h1 className='mt-5 fw-bold'>{t('AreasExpertise.title_4')}</h1>
        <Row className='mt-4'>
          <Col>
            <img src='/img/Logistica.webp' alt='industry' className='w-100' />
          </Col>
          <Col>
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
          </Col>
        </Row>

        <h1 className='mt-5 fw-bold'>{t('AreasExpertise.title_5')}</h1>
        <Row className='mt-4'>
          <Col>
            <img src='/img/recubrimientoPiso.webp' alt='industry' className='w-100' />
          </Col>
          <Col>
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
          </Col>
        </Row>

        <h1 className='mt-5 fw-bold'>{t('AreasExpertise.title_6')}</h1>
        <Row className='mt-4'>
          <Col>
            <img src='/img/transformacionMadera.webp' alt='industry' className='w-100' />
          </Col>
          <Col>
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
          </Col>
        </Row>

        <h1 className='mt-5 fw-bold'>{t('AreasExpertise.title_7')}</h1>
        <Row className='mt-4'>
          <Col>
            <img src='/img/security.webp' alt='industry' className='w-100' />
          </Col>
          <Col>
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
          </Col>
        </Row>

        <h1 className='mt-5 fw-bold'>{t('AreasExpertise.title_8')}</h1>
        <Row className='mt-4'>
          <Col>
            <img src='/img/digitalizacion.webp' alt='industry' className='w-100' />
          </Col>
          <Col>
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
          </Col>
        </Row>

        <h1 className='mt-5 fw-bold'>{t('AreasExpertise.title_9')}</h1>
        <Row className='mt-4'>
          <Col>
            <img src='/img/automotriz.webp' alt='industry' className='w-100' />
          </Col>
          <Col>
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
          </Col>
        </Row>

        <h1 className='mt-5 fw-bold'>{t('AreasExpertise.title_10')}</h1>
        <Row className='mt-4'>
          <Col>
            <img src='/img/metal.webp' alt='industry' className='w-100' />
          </Col>
          <Col>
            <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_10')) }} />
            <ul className='areasList'>
              <li>
                <a href='https://www.metalworkingchina.com/en/' target='_blank' rel='noreferrer'>
                  Metalworking and CNC Machine Tool Show
                </a>
              </li>
              <li>
                <a href='http://www.metaltechchina.com/' target='_blank' rel='noreferrer'>
                  Metal + Tech
                </a>
              </li>
              <li>
                <a href='http://www.mm-china.com/en/' target='_blank' rel='noreferrer'>
                  Metal + Metallurgy China
                </a>
              </li>
              <li>
                <a href='https://www.laserfair.cn/' target='_blank' rel='noreferrer'>
                  LASERFAIR Shenzhen
                </a>
              </li>
              <li>
                <a href='https://industrialtransformation.mx/' target='_blank' rel='noreferrer'>
                  Industrial Transformation Mexico
                </a>
              </li>
              <li>
                <a href='https://aluexpo.com/home-en/?en' target='_blank' rel='noreferrer'>
                  AluExpo
                </a>
              </li>
              <li>
                <a href='https://ankiros.com/home-new/' target='_blank' rel='noreferrer'>
                  Ankiros/Annofer/Turkcast
                </a>
              </li>
              <li>
                <a href='http://www.win-eurasia.com/en' target='_blank' rel='noreferrer'>
                  WIN EURASIA Metalworking
                </a>
              </li>
              <li>
                <a href='https://www.win-eurasia.com/en' target='_blank' rel='noreferrer'>
                  WIN EURASIA Welding
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <h1 className='mt-5 fw-bold'>{t('AreasExpertise.title_11')}</h1>
        <Row className='mt-4'>
          <Col>
            <img src='/img/didacta.webp' alt='industry' className='w-100' />
          </Col>
          <Col>
            <p dangerouslySetInnerHTML={{ __html: (t('AreasExpertise.text_11')) }} />
            <ul className='areasList'>
              <li>
                <a href='https://www.messe.de/en/' target='_blank' rel='noreferrer'>
                  didacta-hannover.de
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

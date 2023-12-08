import { Carousel, Col, Container, Ratio, Row } from 'react-bootstrap'
import './Home.css'
import { useTranslation } from 'react-i18next'
import { ModalNavidad } from './ModalNavidad'
export function Home () {
  const { t } = useTranslation()
  return (
    <>
      <ModalNavidad />
      <Container className='piechart-wrapper'>
        <p className='text-end pinechart-button'>
          <a href='https://cuatro-cero.mx/' target='_blank' rel='noreferrer'>
            <img src='/img/CuatroCero.jpg' alt='cuatro cero' width={120} />
          </a>
        </p>
        <Carousel>
          <Carousel.Item>
            <a href='https://industrialtransformation.mx/' target='_blank' rel='noreferrer'>
              <img src='/img/ITM-2024-ES.webp' className='w-100' alt='ITM2023' />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://www.hfmexico.mx/MEMIndustrial/' target='_blank' rel='noreferrer'>
              <img src='/img/BannerWeb_MEM2024_ESP.webp' className='w-100' alt='MEM2024' />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://www.hfmexico.mx/solarpowermexico/es/' target='_blank' rel='noreferrer'>
              <img src='/img/Banner_SPM_ESP_2024.webp' className='w-100' alt='SOLAR2024' />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://hfmexico.mx/ecomondo/' target='_blank' rel='noreferrer'>
              <img src='/img/ECOMONDO2024-espanol.webp' className='w-100' alt='ECOMONDO2024' />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://hfmexico.mx/agrotechmexico/' target='_blank' rel='noreferrer'>
              <img src='/img/Agro2.webp' className='w-100' alt='AGROTECH' />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://hfmexico.mx/worldseafood/' target='_blank' rel='noreferrer'>
              <img src='/img/KEYVISUAL AGROTECH.webp' className='w-100' alt='WSI2024' />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://hfmexico.mx/americas-mobility-future/' target='_blank' rel='noreferrer'>
              <img src='/img/MOBILITY.webp' className='w-100' alt='MOBILITY' />
            </a>
          </Carousel.Item>
        </Carousel>
        <Row className='mt-5 wrapper-igeco-ferias'>
          <Col md={3} className='mt-4 mx-auto'>
            <a href='https://www.hfmexico.mx/solarpowermexico/es/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/Logo_SSM.webp' alt='Solar' className='w-100' />
                <div className='p-2'>
                  <h3> SOLAR + STORAGE MEXICO 2024</h3>
                  <p dangerouslySetInnerHTML={{ __html: (t('home.solar')) }} />
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto'>
            <a href='https://hfmexico.mx/ecomondo/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/Logo_ECOMONDO.webp' alt='Ecomondo' className='w-100' />
                <div className='p-2'>
                  <h3> ECOMONDO MÉXICO 2024</h3>
                  <p dangerouslySetInnerHTML={{ __html: (t('home.ecomondo')) }} />
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto'>
            <a href='https://www.hfmexico.mx/MEMIndustrial/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/Logo_MEM.webp' alt='MEM' className='w-100' />
                <div className='p-2'>
                  <h3> MEM 2024</h3>
                  <p dangerouslySetInnerHTML={{ __html: (t('home.mem')) }} />
                </div>
              </div>
            </a>
          </Col>

        </Row>
        <Row className='mt-5 wrapper-igeco-ferias'>
          <Col md={3} className='mt-4 mx-auto'>
            <a href='https://hfmexico.mx/agrotechmexico/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/agrotech2.webp' alt='Agro' className='w-100' />
                <div className='p-2'>
                  <h3> AGROTECH MÉXICO 2024</h3>
                  <p dangerouslySetInnerHTML={{ __html: (t('home.agrotech')) }} />
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto'>
            <a href='https://hfmexico.mx/worldseafood/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/Logo_WSI2.webp' alt='WSI' className='w-100' />
                <div className='p-2'>
                  <h3> WSI 2024</h3>
                  <p dangerouslySetInnerHTML={{ __html: (t('home.wsi')) }} />
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto'>
            <a href='https://www.macsexpo.mx/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/Logo_MACS.webp' alt='ITM' className='w-100' />
                <div className='p-2'>
                  <h3> MACS 2024</h3>
                  <p>MACS 2024</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row className='mt-5 wrapper-igeco-ferias'>
          <Col md={3} className='mt-4 mx-auto'>
            <a href='https://hfmexico.mx/americas-mobility-future/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/logo_movility2024.webp' alt='ITM' className='w-100' />
                <div className='p-2'>
                  <h3> AMERICAS' MOBILITY OF THE FUTURE</h3>
                  <p>{t('home.mobility')}<br />
                    Monterrey, Nuevo León
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto'>
            <a href='https://hfmexico.mx/viveelvino/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/VIVE-EL-VINO.webp' alt='ITM' className='w-100' />
                <div className='p-2'>
                  <h3> VIVE EL VINO 2024</h3>
                  <p dangerouslySetInnerHTML={{ __html: (t('home.viveelvino')) }} />
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto'>
            <a href='https://industrialtransformation.mx/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/Logo_ITM.webp' alt='ITM' className='w-100' />
                <div className='p-2'>
                  <h3> ITM 2024</h3>
                  <p dangerouslySetInnerHTML={{ __html: (t('home.itm')) }} />
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row className='mt-5 wrapper-igeco-ferias'>
          <Col md={3} className='mt-4 mx-auto'>
            <a href='https://hfmexico.mx/foro-nearshoring/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/nearshoring.webp' alt='Nearshoring' className='w-100' />
                <div className='p-2'>
                  <h3> Foro Nearshoring</h3>
                  <p>2024</p>
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto'>
            <a href='https://hfmexico.mx/foro-electromovilidad/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/electromovilidad.webp' alt='electromovilidad' className='w-100' />
                <div className='p-2'>
                  <h3> Foro Electromovilidad</h3>
                  <p>2024</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
      <Container className='mt-5 p-5 bg-secondary'>
        <h1 className='text-center mb-5 text-light'>Videos</h1>
        <Row>
          <Col>
            <Ratio aspectRatio='16x9'>
              <iframe
                src='https://www.youtube-nocookie.com/embed/Vgd9L5iemws'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </Ratio>
          </Col>
          <Col>
            <Ratio aspectRatio='16x9'>
              <iframe
                src='https://www.youtube-nocookie.com/embed/YWUJrv0bXko'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </Ratio>
          </Col>
          <Col>
            <Ratio aspectRatio='16x9'>
              <iframe
                src='https://www.youtube-nocookie.com/embed/RIoD_MLMRZ0'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </Ratio>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col>
            <Ratio aspectRatio='16x9'>
              <iframe
                src='https://www.youtube-nocookie.com/embed/q3zKP04Cej0'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </Ratio>
          </Col>
          <Col>
            <Ratio aspectRatio='16x9'>
              <iframe
                src='https://www.youtube-nocookie.com/embed/_API66_gvnk'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </Ratio>
          </Col>
          <Col>
            <Ratio aspectRatio='16x9'>
              <iframe
                src='https://www.youtube-nocookie.com/embed/rj6ubgIR6Do'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </Ratio>
          </Col>
        </Row>
      </Container>
    </>
  )
}

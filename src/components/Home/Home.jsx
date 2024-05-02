import { Carousel, Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import { useTranslation } from 'react-i18next'
import '@justinribeiro/lite-youtube'

export function Home() {
  const { t, i18n } = useTranslation()
  return (
    <>
      <Container className='piechart-wrapper'>
        <p className='text-end pinechart-button'>
          <a href='https://cuatro-cero.mx/' target='_blank' rel='noreferrer'>
            <img src='/img/CuatroCero.jpg' alt='cuatro cero' width={120} />
          </a>
        </p>
        <Carousel fade>
          <Carousel.Item>
            <a
              href='https://viveelvino.igeco.mx/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/img/keyVisual_vivelvino.webp'
                className='w-100'
                alt='MOBILITY'
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              href='https://industrialtransformation.mx/'
              target='_blank'
              rel='noreferrer'
            >
              {i18n.language === 'en' ? (
                <video
                  width='100%'
                  height='auto'
                  muted
                  loop
                  autoPlay
                  playsInline
                  src='/ITM-2024-ENG.mp4'
                />
              ) : (
                <video
                  width='100%'
                  height='auto'
                  muted
                  loop
                  autoPlay
                  playsInline
                  src='/ITM-2024-ESP.mp4'
                />
              )}
            </a>
          </Carousel.Item>
          {/*<Carousel.Item>
            <a
              href='https://www.hfmexico.mx/MEMIndustrial/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/img/BannerWeb_MEM2024_ESP.webp'
                className='w-100'
                alt='MEM2024'
              />
            </a>
          </Carousel.Item>*/}
           <Carousel.Item>
            <a
              href='https://amofexpo.igeco.mx/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/img/bannerAmof.webp'
                className='w-100'
                alt='MOBILITY'
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              href='https://www.hfmexico.mx/solarpowermexico/es/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/img/keyvisua_re+_2025.webp'
                className='w-100'
                alt='MOBILITY'
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              href='https://hfmexico.mx/ecomondo/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/img/keyvisual_eco_2025.webp'
                className='w-100'
                alt='MOBILITY'
              />
            </a>
          </Carousel.Item>
          {/*<Carousel.Item>
            <a
              href='https://hfmexico.mx/agrotechmexico/'
              target='_blank'
              rel='noreferrer'
            >
              {i18n.language === 'en' ? (
                <img
                  className='d-block w-100'
                  src='/AGROTECH-BANNER-ENG.webp'
                  alt='Agrotech Mexico 2024'
                />
              ) : (
                <img
                  className='d-block w-100'
                  src='/AGROTECH-BANNER-ESP.webp'
                  alt='Agrotech Mexico 2024'
                />
              )}
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              href='https://worldseafoodindustry.mx/'
              target='_blank'
              rel='noreferrer'
            >
              {i18n.language === 'en' ? (
                <video
                  width='100%'
                  height='auto'
                  muted
                  loop
                  autoPlay
                  playsInline
                  src='/worldSefood_ENG.mp4'
                />
              ) : (
                <video
                  width='100%'
                  height='auto'
                  muted
                  loop
                  autoPlay
                  playsInline
                  src='/worldSefood_ESP.mp4'
                />
              )}
            </a>
              </Carousel.Item>*/}
        </Carousel>
        <Row className='mt-5 wrapper-igeco-ferias'>
          {/*<Col md={3} className='mt-4 mx-auto'>
            <a
              href='https://www.hfmexico.mx/MEMIndustrial/'
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <img src='/img/Logo_MEM.webp' alt='MEM' className='w-100' />
                <div className='p-2'>
                  <h3> MEM 2025</h3>
                  <p dangerouslySetInnerHTML={{ __html: t('home.mem') }} />
                </div>
              </div>
            </a>
          </Col>*/}
        </Row>
        <Row className='mt-5 wrapper-igeco-ferias'>
          <Col md={3} className='mt-4 mx-auto shadow-lg rounded p-0'>
            <a
              href='https://viveelvino.igeco.mx/'
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <img src='/img/VIVE-EL-VINO.webp' alt='ITM' className='w-100' />
                <div className='p-2'>
                  <h3> VIVE EL VINO 2024</h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: t('home.viveelvino') }}
                  />
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto shadow-lg rounded p-0'>
            <a
              href='https://industrialtransformation.mx/'
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <img src='/img/Logo_ITM.webp' alt='ITM' className='w-100' />
                <div className='p-2'>
                  <h3> ITM 2024</h3>
                  <p dangerouslySetInnerHTML={{ __html: t('home.itm') }} />
                  Léon, Guanajuato
                  <br /> Poliforum
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto shadow-lg rounded p-0'>
            <a
              href='https://amofexpo.igeco.mx/'
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <img src='/img/mobility_v2.webp' alt='ITM' className='w-100' />
                <div className='p-2'>
                  <h3> AMERICAS' MOBILITY OF THE FUTURE</h3>
                  <p>
                    {t('home.mobility')}
                    <br />
                    Léon, Guanajuato
                    <br />
                    Poliforum
                  </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row className='mt-5 wrapper-igeco-ferias'>
          <Col md={3} className='mt-4 mx-auto shadow-lg rounded p-0'>
            <a href='https://www.macsexpo.mx/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/Logo_MACS.webp' alt='ITM' className='w-100' />
                <div className='p-2'>
                  <h3> MACS 2025</h3>
                  <p>MACS 2025</p>
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto shadow-lg rounded p-0'>
            <a
              href='https://hfmexico.mx/agrotechmexico/'
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <img src='/img/agrotech2.webp' alt='Agro' className='w-100' />
                <div className='p-2'>
                  <h3> AGROTECH MÉXICO</h3>
                  {/*<p dangerouslySetInnerHTML={{ __html: t('home.agrotech') }} />*/}
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto shadow-lg rounded p-0'>
            <a
              href='https://worldseafoodindustry.mx/'
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <img src='/img/Logo_WSI2.webp' alt='WSI' className='w-100' />
                <div className='p-2'>
                  <h3> WSI</h3>
                  {/*<p dangerouslySetInnerHTML={{ __html: t('home.wsi') }} />*/}
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row className='mt-5 wrapper-igeco-ferias gap-4'>
          <Col md={3} className='mt-4 mx-auto shadow-lg rounded p-0'>
            <a
              href='https://hfmexico.mx/foro-nearshoring/'
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <img
                  src='/img/nearshoring_v2.webp'
                  alt='Nearshoring'
                  className='w-100'
                />
                <div className='p-2'>
                  <h3> Foro Nearshoring</h3>
                  <p>2024</p>
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto shadow-lg rounded p-0'>
            <a
              href='https://hfmexico.mx/foro-electromovilidad/'
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <img
                  src='/img/electromovilidad_v2.webp'
                  alt='electromovilidad'
                  className='w-100'
                />
                <div className='p-2'>
                  <h3> Foro Electromovilidad</h3>
                  <p>2024</p>
                </div>
              </div>
            </a>
          </Col>
           <Col md={3} className='mt-4 mx-auto shadow-lg rounded p-0'>
            <a
              href='https://www.solarpowermexico.mx/'
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <img src='/img/re+mexico_logo_v2.webp' alt='Solar' className='w-100' />
                <div className='p-2'>
                  <h3> RE+ MÉXICO </h3>
                  <p dangerouslySetInnerHTML={{ __html: t('home.solar') }} />
                </div>
              </div>
            </a>
          </Col>
          <Col md={3} className='mt-4 mx-auto shadow-lg rounded p-0'>
            <a
              href='https://hfmexico.mx/ecomondo/'
              target='_blank'
              rel='noreferrer'
            >
              <div>
                <img
                  src='/img/ecomondo2025.webp'
                  alt='Ecomondo'
                  className='w-100'
                />
                <div className='p-2'>
                  <h3> ECOMONDO MÉXICO 2025</h3>
                  <p dangerouslySetInnerHTML={{ __html: t('home.ecomondo') }} />
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
            <lite-youtube
              class='shadow-2xl shadow-white/10 rounded-lg md:h-96'
              videoid='Vgd9L5iemws'
              videotitle='SOLAR POWER MEXICO 2022'
            ></lite-youtube>
          </Col>
          <Col>
            <lite-youtube
              class='shadow-2xl shadow-white/10 rounded-lg md:h-96'
              videoid='YWUJrv0bXko'
              videotitle='Imagina un mundo sin combustibles fósiles⛽️'
            ></lite-youtube>
          </Col>
          <Col>
            <lite-youtube
              class='shadow-2xl shadow-white/10 rounded-lg md:h-96'
              videoid='RIoD_MLMRZ0'
              videotitle='Revive los mejores momentos de MEM 2022 - DÍA III'
            ></lite-youtube>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col>
            <lite-youtube
              class='shadow-2xl shadow-white/10 rounded-lg md:h-96'
              videoid='q3zKP04Cej0'
              videotitle='La industria vitivinícola, cervecera y de destilados🍷'
            ></lite-youtube>
          </Col>
          <Col>
            <lite-youtube
              class='shadow-2xl shadow-white/10 rounded-lg md:h-96'
              videoid='_API66_gvnk'
              videotitle='Lo mejor de Industrial Transformation México 2022'
            ></lite-youtube>
          </Col>
          <Col>
            <lite-youtube
              class='shadow-2xl shadow-white/10 rounded-lg md:h-96'
              videoid='rj6ubgIR6Do'
              videotitle='ITM - The leading Industry 4.0 fair in Mexico 🌐'
            ></lite-youtube>
          </Col>
        </Row>
      </Container>
    </>
  )
}

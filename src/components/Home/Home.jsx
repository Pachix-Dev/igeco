import { Carousel, Col, Container, Row } from 'react-bootstrap'
import './Home.css'
export function Home () {
  return (
    <>
      <Container>
        <p className='text-end'>
          <a href='https://cuatro-cero.mx/' target='_blank' rel='noreferrer'>
            <img src='/img/CuatroCero.jpg' alt='cuatro cero' width={120} />
          </a>
        </p>
        <Carousel>
          <Carousel.Item>
            <a href='https://industrialtransformation.mx/' target='_blank' rel='noreferrer'>
              <img src='/img/ITM-nuevo.webp' className='w-100' alt='ITM2023' />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://hfmexico.mx/foro-electromovilidad' target='_blank' rel='noreferrer'>
              <img src='/img/FORO-ELECTROMOVILIDAD.webp' className='w-100' alt='FORO-ELECTROMOVILIDAD' />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://hfmexico.mx/foro-nearshoring' target='_blank' rel='noreferrer'>
              <img src='/img/FORO-NEARSHORING.webp' className='w-100' alt='FORO NEARSHORING' />
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
              <img src='/img/Agro.webp' className='w-100' alt='AGROTECH' />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://hfmexico.mx/worldseafood/' target='_blank' rel='noreferrer'>
              <img src='/img/WSI2024.webp' className='w-100' alt='WSI2024' />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='https://hfmexico.mx/americas-mobility-future/' target='_blank' rel='noreferrer'>
              <img src='/img/MOBILITY.webp' className='w-100' alt='MOBILITY' />
            </a>
          </Carousel.Item>
        </Carousel>
        <Row className='mt-5 wrapper-igeco-ferias'>
          <Col md={4} className='mt-4 mx-auto'>
            <a href='https://industrialtransformation.mx/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/Logo_ITM.webp' alt='ITM' className='w-100' />
                <div className='p-2'>
                  <h3> ITM 2023</h3>
                  <p>4 - 6 de octubre de 2023
                    Poliforum León, Guanajuato<br /><br />
                    Industria 4.0
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col md={4} className='mt-4 mx-auto h-100 '>
            <a href='https://www.hfmexico.mx/MEMIndustrial/' target='_blank' rel='noreferrer'>
              <div className='h-100'>
                <img src='/img/Logo_MEM.webp' alt='MEM' className='w-100' />
                <div className='p-2'>
                  <h3> MEM 2024</h3>
                  <p>2024<br />
                    Transformación de la madera y del mueble
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col md={4} className='mt-4 mx-auto'>
            <a href='https://www.hfmexico.mx/solarpowermexico/es/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/Logo_SSM.webp' alt='Solar' className='w-100' />
                <div className='p-2'>
                  <h3> MEM 2024</h3>
                  <p>2024<br />
                    Transformación de la madera y del mueble
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col md={4} className='mt-4 mx-auto'>
            <a href='https://www.hfmexico.mx/solarpowermexico/es/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/Logo_ECOMONDO.webp' alt='Ecomondo' className='w-100' />
                <div className='p-2'>
                  <h3> ECOMONDO MÉXICO 2024</h3>
                  <p>17 - 19 de abril de 2024<br />
                    Expo Guadalajara, Guadalajara, Jalisco, México<br /><br />
                    Plataforma de tecnología ambiental
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col md={4} className='mt-4 mx-auto'>
            <a href='https://hfmexico.mx/agrotechmexico/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/Logo_AgroTech.webp' alt='Agro' className='w-100' />
                <div className='p-2'>
                  <h3> AGROTECH MÉXICO 2024</h3>
                  <p>15 - 17 de mayo de 2024<br />
                    Expo Guadalajara, Guadalajara, Jalisco, México<br /><br />
                    Agroindustria
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col md={4} className='mt-4 mx-auto'>
            <a href='https://hfmexico.mx/agrotechmexico/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/Logo_WSI.webp' alt='WSI' className='w-100' />
                <div className='p-2'>
                  <h3> WSI 2024</h3>
                  <p>15 - 17 de mayo de 2024<br />
                    Expo Guadalajara, Guadalajara, Jalisco, México<br /><br />
                    Pesca y acuicultura
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col md={4} className='mt-4 mx-auto'>
            <a href='https://hfmexico.mx/americas-mobility-future/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/LOGOS-MOBILITY.webp' alt='ITM' className='w-100' />
                <div className='p-2'>
                  <h3> AMERICAS' MOBILITY OF THE FUTURE</h3>
                  <p>2024<br />
                    Monterrey, Nuevo León
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col md={4} className='mt-4 mx-auto'>
            <a href='https://hfmexico.mx/americas-mobility-future/' target='_blank' rel='noreferrer'>
              <div>
                <img src='/img/VIVE-EL-VINO.webp' alt='ITM' className='w-100' />
                <div className='p-2'>
                  <h3> VIVE EL VINO 2024</h3>
                  <p>Distrito León MX (Instalaciones de la Feria de León)<br /><br />
                    Industria de bebidas y productos relacionados
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col md={4} className='mt-4 mx-auto'>
            <a href='https://hfmexico.mx/macs/' target='_blank' rel='noreferrer'>
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
      </Container>
    </>
  )
}

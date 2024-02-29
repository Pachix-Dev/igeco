import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export function AboutUs() {
  const { t } = useTranslation()
  return (
    <>
      <div className='mt-5 pt-5 pb-5 bg-light'>
        <Container>
          <span className='fst-italic'>Deutsche Messe</span>
          <h1 className='fw-bold text-uppercase'>{t('AboutUs.title')}</h1>
          <p dangerouslySetInnerHTML={{ __html: t('AboutUs.text') }} />
        </Container>
      </div>

      <Container className='mt-5'>
        <Row className='text-center justify-content-md-center'>
          <Col md={3}>
            <img
              src='/img/BERND-ICON.webp'
              className='w-100 rounded-circle object-fit-cover'
              height={300}
            />
            <strong>Bernd Rohde</strong>
            <p>Director General Hannover Fairs México</p>
          </Col>
          <Col md={3}>
            <img
              src='/img/RODO-ICON.webp'
              className='w-100 rounded-circle object-fit-cover'
              height={300}
            />
            <strong>Rodolfo Carrizales</strong>
            <p>Director de Finanzas y Recursos Humanos</p>
          </Col>
          <Col md={3}>
            <img
              src='/img/AZUL-ICON.webp'
              className='w-100 rounded-circle object-fit-cover'
              height={300}
            />
            <strong>Azul Ogazón</strong>
            <p>
              Directora de Proyecto MEM Industrial e Industrial Transformation
              MEXICO
            </p>
          </Col>
          <Col md={3}>
            <img
              src='/img/SANDRA-ICON.webp'
              className='w-100 rounded-circle object-fit-cover'
              height={300}
            />
            <strong>Sandra Elías</strong>
            <p>
              Directora de Proyecto Solar + Storage Mexico y Ecomondo Mexico
            </p>
          </Col>
          <Col md={3}>
            <img
              src='/david_montaudon.webp'
              className='w-100 rounded-circle object-fit-cover object-position-top'
              height={300}
            />
            <strong>David Montaudon</strong>
            <p>Director MARCOM</p>
          </Col>
          <Col md={3}>
            <img
              src='/jean.webp'
              className='w-100 rounded-circle object-fit-cover object-position-top'
              height={300}
            />
            <strong>Jean Christian Macias</strong>
            <p>Director Vive el Vino y Messe Events</p>
          </Col>
          <Col md={3}>
            <img
              src='/alfonso.webp'
              className='w-100 rounded-circle object-fit-cover object-position-top'
              height={300}
            />
            <strong>Alfonso Ramirez Kampfner</strong>
            <p>Director Macs </p>
          </Col>
          <Col md={3}>
            <img
              src='/damian.webp'
              className='w-100 rounded-circle object-fit-cover object-position-top'
              height={300}
            />
            <strong>Damian Arias Ramirez</strong>
            <p>Director Agrotech</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

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
            <p>Deputy Manager IGECO</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

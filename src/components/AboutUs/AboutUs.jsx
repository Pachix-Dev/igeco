import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export function AboutUs () {
  const { t } = useTranslation()
  return (
    <>
      <div className='mt-5 pt-5 pb-5 bg-light'>
        <Container>
          <span className='fst-italic'>Deutsche Messe</span>
          <h1 className='fw-bold text-uppercase'>{t('AboutUs.title')}</h1>
          <p dangerouslySetInnerHTML={{ __html: (t('AboutUs.text')) }} />
        </Container>
      </div>

      <Container className='mt-5'>
        <Row className='text-center'>
          <Col>
            <img src='/img/BERND-ICON.webp' className='w-100 rounded-circle' />
            <strong>Bernd Rohde</strong>
            <p>Director General Hannover Fairs México</p>
          </Col>
          <Col>
            <img src='/img/RODO-ICON.webp' className='w-100 rounded-circle' />
            <strong>Rodolfo Carrizales</strong>
            <p>Director de Finanzas y Recursos Humanos</p>
          </Col>
          <Col>
            <img src='/img/AZUL-ICON.webp' className='w-100 rounded-circle' />
            <strong>Azul Ogazón</strong>
            <p>Directora de Proyecto MEM Industrial e Industrial Transformation MEXICO</p>
          </Col>
          <Col>
            <img src='/img/SANDRA-ICON.webp' className='w-100 rounded-circle' />
            <strong>Sandra Elías</strong>
            <p>Directora de Proyecto Solar + Storage Mexico y Ecomondo Mexico</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

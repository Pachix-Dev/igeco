import { Col, Container, Row } from 'react-bootstrap'
import './History.css'
import { useTranslation } from 'react-i18next'
import { AboutIgeco } from '../AboutIgeco/AboutIgeco'
export function History () {
  const { t } = useTranslation()
  return (
    <>

      <Container className='mt-5'>
        <Row>
          <Col md={4}>
            <img src='/img/Exportmesse1947.webp' className='w-100' />
          </Col>
          <Col md>
            <span className='fst-italic'>Deutsche Messe</span>
            <h1 className='fw-bold' dangerouslySetInnerHTML={{ __html: (t('history.title')) }} />
            <p style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: (t('history.text_history')) }} />
          </Col>
        </Row>
        <p style={{ textAlign: 'justify' }} className='mt-3' dangerouslySetInnerHTML={{ __html: (t('history.text_history2')) }} />
        <AboutIgeco />
      </Container>
    </>
  )
}

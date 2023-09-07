import { Col, Container, Row } from 'react-bootstrap'
import './History.css'
import { useTranslation } from 'react-i18next'
export function History () {
  const { t } = useTranslation()
  return (
    <>
      <Row className='m-0'>
        <Col className='parallax-history' />
        <Col className='p-5'>
          <span className='fst-italic'>Deutsche Messe</span>
          <h1 className='fw-bold' dangerouslySetInnerHTML={{ __html: (t('history.title')) }} />
          <p dangerouslySetInnerHTML={{ __html: (t('history.text_history')) }} />
        </Col>
      </Row>
      <Container className='mt-5'>
        <p className='text-center' dangerouslySetInnerHTML={{ __html: (t('history.text_history2')) }} />
        <img src='/img/MAPA.webp' alt='mapa IGECO' className='w-100' />
      </Container>
    </>
  )
}

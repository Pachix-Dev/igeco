import { Col, Container, Figure, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export function AboutIgeco () {
  const { t } = useTranslation()
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col>
            <span className='fst-italic'>{t('AboutIgeco.title')}</span>
            <h1 className='fw-bold'>DEUTSCHE MESSE</h1>
            <p dangerouslySetInnerHTML={{ __html: (t('AboutIgeco.text_deutsche')) }} />
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                className='w-100'
                alt='deutsche-messe'
                src='/img/deutsche-messe.webp'
              />
              <Figure.Caption className='fst-italic'>
                {t('AboutIgeco.text_img')}
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
      <div className='bg-light pt-5 pb-5'>
        <Container>
          <span className='fst-italic'>{t('AboutIgeco.title')}</span>
          <h1 className='fw-bold'>ITALIAN EXHIBITION GROUP</h1>
          <Row>
            <Col>
              <img src='/img/event.webp' alt='event igeco' className='w-100' />
            </Col>
            <Col>
              <p dangerouslySetInnerHTML={{ __html: (t('AboutIgeco.text_igeco')) }} />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className='mt-5'>
        <h1 className='text-uppercase fw-bold'>{t('AboutIgeco.title')} ITALIAN GERMAN EXHIBITION COMPANY MÉXICO</h1>
        <p>{t('AboutIgeco.text_igeco_2')}</p>
        <Row className='mt-5'>
          <Col>
            <p>{t('AboutIgeco.text_igeco_3')}</p>
          </Col>
          <Col>
            <p>{t('AboutIgeco.text_igeco_4')}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

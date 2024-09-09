import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export function PrivacyPolitic() {
  const { t } = useTranslation()

  return (
    <Container className='pt-5'>
      <i>Deutsche Messe</i>
      <br />
      <br />
      <h4>{t('privacy.text')}</h4>
      <div>
        <strong>Italian German Exhibition Company Mexico, S.A. de C.V.</strong>
        <br />
        <br />
        <span dangerouslySetInnerHTML={{ __html: t('privacy.text_1') }} />
        <br />
        <br />
        <strong>
          <u>{t('privacy.text')}</u>
        </strong>
        <br />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_3') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_4') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_5') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_6') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_7') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_8') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_9') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_10') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_11') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_12') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_13') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_14') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_15') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_16') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_17') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_18') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t('privacy.text_19') }} />
        <br />
        <br />
        <strong>{t('privacy.text_20')}</strong>
      </div>
    </Container>
  )
}

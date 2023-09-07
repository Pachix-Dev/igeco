import 'bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home'
import { Menu } from './components/Menu/Menu'
import { Footer } from './components/Footer/Footer'
import { Contact } from './components/Contact/Contact'
import { History } from './components/History/History'

function App () {
  const { t } = useTranslation()
  return (
    <>
      <Menu />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Helmet>
                <title>IGECO | Producimos eventos de negocio</title>
                <meta name='description' content={t('seo.description')} />
              </Helmet>
              <Home />
            </>
          }
        />
        <Route
          path='/history'
          element={
            <>
              <Helmet>
                <title>IGECO | History</title>
                <meta name='description' content={t('seo.description')} />
              </Helmet>
              <History />
            </>
          }
        />
        <Route
          path='/about-igeco'
          element={
            <>
              <Helmet>
                <title>IGECO | About Igeco</title>
                <meta name='description' content={t('seo.description')} />
              </Helmet>
              <History />
            </>
          }
        />
        <Route
          path='/contact'
          element={
            <>
              <Helmet>
                <title>IGECO | Contact</title>
                <meta name='description' content={t('seo.description')} />
              </Helmet>
              <Contact />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App

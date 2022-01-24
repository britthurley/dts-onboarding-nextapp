import '../styles/globals.css'
import '../styles/fonts.css'

import en from '../locales/en'
import fr from '../locales/fr'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const t = pageProps.locale === 'en' ? en : fr
  return (
    <Layout locale={pageProps.locale}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

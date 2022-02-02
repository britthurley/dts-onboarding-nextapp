import '../styles/globals.css'

import Layout from '../components/Layout'
import convertExpression from 'node-cron/src/convert-expression'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <Layout locale={pageProps.locale} langToggleLink={pageProps.langToggleLink}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

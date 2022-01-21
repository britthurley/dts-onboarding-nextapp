import '../styles/globals.css'
import '../styles/fonts.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout locale="en">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

import PropTypes from 'prop-types'
import en from '../locales/en'
import fr from '../locales/fr'

import { fetchContent } from '../lib/cms'

export default function Home(props) {
  const t = props.locale === 'en' ? en : fr
  return (
    <div
      id="homeContent"
      className="container mx-auto px-6 mt-5 bg-slate-300 p-8"
    >
      <h1>{props.content.header}</h1>
      <p>{props.content.paragraph}</p>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const content = await fetchContent()
  const langToggleLink = locale === 'en' ? '/fr/accueil' : '/home'
  return {
    props: { locale, langToggleLink, content },
  }
}

Home.propTypes = {
  /**
   * current locale in the address
   */
  locale: PropTypes.string,
  /**
   * current language based on the locale
   */
  langToggleLink: PropTypes.string,
  /**
   *  content of the page from the CMS
   */
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

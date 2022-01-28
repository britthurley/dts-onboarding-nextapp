import PropTypes from 'prop-types'
import en from '../locales/en'
import fr from '../locales/fr'

export default function Home(props) {
  const t = props.locale === 'en' ? en : fr
  return (
    <div className="container mx-auto px-6 mt-5 bg-slate-300 p-8">
      <h1>Add your content here</h1>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const langToggleLink = locale === 'en' ? '/fr/home' : '/home'
  return {
    props: { locale, langToggleLink },
  }
}

Home.propTypes = {
  /**
   * current locale in the address
   */
  locale: PropTypes.string,
}

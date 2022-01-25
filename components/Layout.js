import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

import en from '../locales/en'
import fr from '../locales/fr'

export default function Layout(props) {
  const t = props.locale === 'en' ? en : fr
  return (
    <>
      <Head>
        <title>Next Template - Canada.ca</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        language={props.locale}
        t={t}
        toggleLangLink={props.toggleLangLink}
      ></Header>

      <main>
        <div>{props.children}</div>
      </main>

      <Footer
        footerLogoAltText="symbol2"
        footerLogoImage="/wmms-blk.svg"
        footerNav1="aboutGovernment"
        footerNav2="aboutThisSite"
        links={[
          {
            link: t.footerSocialMediaURL,
            linkText: t.footerSocialMedia,
          },
          {
            link: t.footerMobileAppURL,
            linkText: t.footerMobileApp,
          },
          {
            link: t.footerAboutURL,
            linkText: t.footerAbout,
          },
          {
            link: t.footerTermsAndConditionURL,
            linkText: t.footerTermsAndCondition,
          },
          {
            link: t.footerPrivacyURL,
            linkText: t.footerPrivacy,
          },
        ]}
        footerBoxLinks={[
          {
            footerBoxlink: t.footerContactUsURL,
            footerBoxLinkText: t.footerContactUs,
          },
          {
            footerBoxlink: t.footerNewsURL,
            footerBoxLinkText: t.footerNews,
          },
          {
            footerBoxlink: t.footerPmURL,
            footerBoxLinkText: t.footerPm,
          },
          {
            footerBoxlink: t.footerDepartmentAgenciesURL,
            footerBoxLinkText: t.footerDepartmentAgencies,
          },
          {
            footerBoxlink: t.footerTreatiesURL,
            footerBoxLinkText: t.footerTreaties,
          },
          {
            footerBoxlink: t.footerHowGovWorksURL,
            footerBoxLinkText: t.footerHowGovWorks,
          },
          {
            footerBoxlink: t.footerPublicServiceURL,
            footerBoxLinkText: t.footerPublicService,
          },
          {
            footerBoxlink: t.footerGovReportingURL,
            footerBoxLinkText: t.footerGovReporting,
          },
          {
            footerBoxlink: t.footerOpenGovURL,
            footerBoxLinkText: t.footerOpenGov,
          },
        ]}
      />
    </>
  )
}

Layout.propTypes = {
  /*
   * Locale current language
   */
  locale: PropTypes.string,
  /*
   * Title of the page
   */
  title: PropTypes.string,
  /*
   * Link of the page in opposite language
   */
  toggleLangLink: PropTypes.string,
  /*
   * Toggle use of header
   */
  displayHeader: PropTypes.bool,
  /*
   * Toggle use of footer
   */
  displayFooter: PropTypes.bool,
}
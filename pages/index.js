import { fetchContent } from '../lib/cms'

export default function Index(props) {
  return (
    <div className="container mx-auto px-6 mt-5 bg-slate-300 p-8">
      <h1>{props.content.header}</h1>
      <p>{props.content.paragraph}</p>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const content = await fetchContent()
  return {
    props: { locale, content },
  }
}

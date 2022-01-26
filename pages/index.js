export default function Index() {
  return (
    <div className="container mx-auto px-6 mt-5 bg-slate-300 p-8">
      <h1>Add your content here</h1>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: { locale },
  }
}

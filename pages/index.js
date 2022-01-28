export default function Index() {
  return (
    <div className="container mx-auto px-6 my-5 bg-slate-300 p-12">
      <h1>Add your spalsh screen content here</h1>
    </div>
  )
}

Index.getLayout = function PageLayout(page) {
  return <>{page}</>
}

export async function getStaticProps({ locale }) {
  return {
    props: { locale },
  }
}

export default function Index() {
  return <div>Add your content here</div>
}

export async function getStaticProps({ locale }) {
  return {
    props: { locale },
  }
}

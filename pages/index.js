export default function Index() {
  return <div>test here</div>
}

export async function getStaticProps({ locale }) {
  return {
    props: { locale },
  }
}

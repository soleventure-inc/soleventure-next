import Layout from '@components/Layout'

const PressKit = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Contact`} description={description}>
        <h1>Press Kit</h1>
      </Layout>
    </>
  )
}

export default PressKit

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
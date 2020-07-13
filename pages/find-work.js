import Layout from '@components/Layout'

const FindWork = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Find Work`} description={description}>
        <h1>Find Work</h1>
      </Layout>
    </>
  )
}

export default FindWork

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
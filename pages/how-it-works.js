import Layout from '@components/Layout'

const HowItWorks = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | How it Works`} description={description}>
        <h1>How it works</h1>
      </Layout>
    </>
  )
}

export default HowItWorks

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
import Layout from '@components/Layout'

const LaunchAndGrow = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Launch and Grow`} description={description}>
        <h1>Launch and Grow</h1>
      </Layout>
    </>
  )
}

export default LaunchAndGrow

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
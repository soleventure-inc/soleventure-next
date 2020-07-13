import Layout from '@components/Layout'

const AboutUs = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About Us`} description={description}>
        <h1>About Us</h1>
      </Layout>
    </>
  )
}

export default AboutUs

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
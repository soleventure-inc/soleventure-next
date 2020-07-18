import Layout from '@components/Layout'

const Contact = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Contact`} description={description}>
        <h1>Contact</h1>
      </Layout>
    </>
  )
}

export default Contact

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
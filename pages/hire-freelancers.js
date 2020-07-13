import Layout from '@components/Layout'

const HireFreelancers = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Hire Freelancers`} description={description}>
        <h1>Hire Freelancers</h1>
      </Layout>
    </>
  )
}

export default HireFreelancers

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
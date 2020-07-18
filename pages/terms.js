import Layout from '@components/Layout'
import ReactMarkdown from 'react-markdown'
import { Container, Grid } from '@components/Grid'
import terms from '../posts/terms.md'
import { Box } from '@components/Box'

const Terms = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Terms`} description={description}>
        <Container>
          <Grid>
            <div className="grid__col grid__col--2-of-3 grid__col--centered">
              <Box
                marginTop="48px"
              >
                <h1>Terms of Use</h1>
                <p className="lead">Updated: June 1, 2020</p>
                <p>These Terms of Use (the “Terms”) apply to your use of SoleVenture, Inc. (referred to as “SoleVenture,” “we,” and “our”), and include your use of all of SoleVenture’s products, services, applications, websites, and software (the “Services”). When you create a user account or access any of the Services, you are agreeing to the Terms and agree to be bound by them. We ask that you please read and fully understand the Terms before accessing and utilizing the Services.</p>
              </Box>
              <ReactMarkdown source={terms}/>
            </div>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default Terms

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
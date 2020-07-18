import Layout from '@components/Layout'
import ReactMarkdown from 'react-markdown'
import { Container, Grid } from '@components/Grid'
import privacyPolicy from '../posts/privacy-policy.md'
import { Box } from '@components/Box'

const PrivacyPolicy = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Terms`} description={description}>
        <Container>
          <Grid>
            <div className="grid__col grid__col--2-of-3 grid__col--centered">
              <Box
                marginTop="48px"
                marginBottom="24px"
              >
                <h1>Privacy Policy</h1>
                <p className="lead">Policy Updated Date: June 1, 2020</p>
              </Box>
              <ReactMarkdown source={privacyPolicy}/>
            </div>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default PrivacyPolicy

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
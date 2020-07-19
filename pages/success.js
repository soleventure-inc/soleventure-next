import Layout from '@components/Layout'
import { SectionContainer, Container, Grid } from '@components/Grid'


const Success = ({ title, description, ...props }) => {

  return (
    <>
      <Layout pageTitle={`${title} | Contact`} description={description}>
        <SectionContainer>
          <Container>
            <Grid>
              <div className="grid__col grid__col--1-of-2 grid__col--centered">
                <div style={{ textAlign: 'center'}}>
                  <img
                    src="/static/images/icon-success.svg"
                    width="80"
                  />
                  <h1>Thank You!</h1>
                  <p className="lead">
                  We've received your information and will be in touch soon.
                  </p>
                  <progress
                    value="100"
                    max="100"
                    className="active"
                    style={{
                      width: '100%'
                    }}
                  >
                  </progress>
                </div>
              </div>
            </Grid>
          </Container>
        </SectionContainer>
      </Layout>
    </>
  )
}

export default Success

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
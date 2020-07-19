import Layout from '@components/Layout'
import { SectionContainer, Container, Grid } from '@components/Grid'
import Link from 'next/link'

const Error404 = ({ title, description, ...props }) => {

  return (
    <>
      <Layout pageTitle={`${title} | 404`} description={description}>
        <SectionContainer>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <div style={{ textAlign: 'center'}}>
                  <img
                    src="/static/images/404.png"
                    style={{
                      display: 'block',
                      width: '100%',
                      maxWidth: '300px',
                      margin: 'auto'
                    }}
                  />
                  <h3>Oops, we couldn't find the page you're looking for.</h3>
                  <p className="lead">
                  Daisy searched high and low but couldn’t find what you’re looking for. Let’s find a better place for you to go.
                  </p>
                  <Link href='/'>
                    <a>
                      Back Home
                    </a>
                  </Link>
                </div>
              </div>
            </Grid>
          </Container>
        </SectionContainer>
      </Layout>
    </>
  )
}

export default Error404

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
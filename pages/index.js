import Layout from '@components/Layout'
import { Section, Container, Grid, Col } from '@components/Grid'
import styled from 'styled-components'

const Hero = styled(Section)`
  height: 655px;
  overflow-y: hidden;
  padding-bottom: ${({ theme }) => theme.space[6]};
  text-align: left;
  background: var(--primary);
  color: var(--white);
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[4]}) {
    text-align: center;
  }
`

const Index = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Hero>
          <Container>
            <Grid>
              <Col>
                <h1
                  style={{
                    marginTop: '88px'
                  }}
                >Employ Yourself</h1>
                <h5 style={{
                  color: 'var(--teal)'
                }}>The back-office platform for your company of one</h5>
                <p className="lead">Start your company. Access personal benefits. Grow with our community of self-employed professionals.</p>
              </Col>
              <Col></Col>
            </Grid>
          </Container>
        </Hero>
      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}

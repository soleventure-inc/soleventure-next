import Layout from '@components/Layout'
import { SectionContainer, Container, Grid } from '@components/Grid'
import styled from 'styled-components'

const FullWidth = styled.div`
  padding-top: ${({ theme }) => theme.space[8]};
  padding-bottom: ${({ theme }) => theme.space[8]};
  text-align: ${props => props.center ? 'center' : 'initial'};
  background: ${props => props.bg ? props.bg : 'transparent'};
  color: ${props => props.color ? props.color : 'inherit'};
`

const Success = ({ title, description, ...props }) => {

  return (
    <>
      <Layout pageTitle={`${title} | Contact`} description={description}>
        <FullWidth>
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
                  You're signed up to download the SoleVenture Beta.
                  </p>
                  <p>You will be recieving an email with instructions on how to get started. We look forward to supporting you on your freelancing journey.</p>
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
        </FullWidth>
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
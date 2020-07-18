import Layout from '@components/Layout'
import { SectionContainer, Grid, Container } from '@components/Grid' 
import styled from 'styled-components'
import { ButtonGhost } from '@components/Button'
import HubspotForm from 'react-hubspot-form'

const FullWidth = styled.div`
  padding-top: 88px;
  padding-bottom: ${({ theme }) => theme.space[7]};
  text-align: ${props => props.center ? 'center' : 'initial'};
  background: ${props => props.bg ? props.bg : 'transparent'};
  color: ${props => props.color ? props.color : 'inherit'};
`

const LaunchAndGrow = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Launch and Grow`} description={description}>
        <FullWidth bg={'var(--baseDark)'} color={'var(--white)'}>
          <Container>
            <Grid>
              <div className="grid__col grid__col--1-of-2">
                <h2>Launch and Grow Your Freelance Business</h2>
                <p className="lead">Be the first to test SoleVenture’s freelance app and give us feedback!</p>
                <p
                  className="lead"
                  style={{
                    color: 'var(--teal)'
                  }}
                >
                  Beta testers are entered into a drawing for a $100 Amazon gift card.
                </p>
              </div>
              <div className="grid__col grid__col--1-of-2">
                <img
                  style={{
                    display: 'block',
                    width: '100%'
                  }}
                  src="/static/images/launch-and-grow.png"
                />
              </div>
              <div className="grid__col grid__col--12-of-12">
                <div style={{textAlign: 'center'}}>
                  <ButtonGhost color={'var(--red)'}>
                  Fill out the form below &darr;
                  </ButtonGhost>
                </div>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--12-of-12">
                <div style={{ textAlign: 'center'}}>
                  <h3>Beta Test Screening Questions</h3>
                  <p className="lead">Fill out the form to have a chance at winning a <strong style={{ color: 'var(--primary)'}}>$100 Amazon gift card</strong>.</p>
                </div>
              </div>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <HubspotForm
                  portalId='6775904'
                  formId='0cc970b9-6d67-4f6e-8053-6b5983813866'
                  onSubmit={() => console.log('Submit!')}
                  onReady={(form) => console.log('Form ready!')}
                  loading={<div>Loading...</div>}
                />
              </div>
            </Grid>
          </Container>
        </FullWidth>
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
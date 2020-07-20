import Layout from '@components/Layout'
import { Container, Grid } from '@components/Grid'
import styled from 'styled-components'
import HubspotForm from 'react-hubspot-form'

const FullWidth = styled.div`
  padding-top: 88px;
  padding-bottom: ${({ theme }) => theme.space[7]};
  text-align: ${props => props.center ? 'center' : 'initial'};
  background: ${props => props.bg ? props.bg : 'transparent'};
  color: ${props => props.color ? props.color : 'inherit'};
`

const TextItem = styled.div`
  color: ${props => props.active ? 'var(--primary)' : 'var(--baseMedium)'};
  text-align: center;
  padding: ${({ theme }) => theme.space[2]};
`

const FindWork = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Find Work`} description={description}>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <div style={{ textAlign: 'center'}}>
                  <img src="/static/images/gain-work-icon.svg" width="80"/>
                  <h1>Find Work</h1>
                  <p className="lead">
                    Are you ready to get back to work? Find the best freelance jobs near you.
                  </p>
                  <progress
                    style={{
                      width: '100%'
                    }}
                    value="33"
                    max="100"
                  ></progress>
                </div>
                <Grid>
                  <div className="grid__col grid__col--1-of-3">
                    <TextItem active>
                      Information
                    </TextItem>
                  </div>
                  <div className="grid__col grid__col--1-of-3">
                    <TextItem>
                      Availabilty
                    </TextItem>
                  </div>
                  <div className="grid__col grid__col--1-of-3">
                    <TextItem>
                      Skills
                    </TextItem>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <Container>
          <Grid>
          <div className="grid__col grid__col--2-of-3 grid__col--centered">
            <HubspotForm
              portalId='6775904'
              formId='cce51d26-0631-4ee3-adb0-1139e2aec71c'
              onSubmit={() => (console.log('Submit!'))}
              onReady={(form) => console.log('Form ready!')}
              loading={<div>Loading...</div>}
            />
          </div>
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default FindWork

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
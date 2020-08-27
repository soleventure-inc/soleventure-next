import React, { useState } from 'react'
import Layout from '@components/Layout'
import { Grid, Container } from '@components/Grid' 
import styled from 'styled-components'
import HubspotForm from 'react-hubspot-form'

const FullWidth = styled.div`
  padding-top: 88px;
  padding-bottom: ${({ theme }) => theme.space[7]};
  text-align: ${props => props.center ? 'center' : 'initial'};
  background: ${props => props.bg ? props.bg : 'transparent'};
  color: ${props => props.color ? props.color : 'inherit'};
`

const LaunchAndGrow = ({ title, description, ...props }) => {
  const [success, setSuccess] = useState(false);
  return (
    <>
      <Layout pageTitle={`${title} | Launch and Grow`} description={description}>
        <FullWidth bg={'var(--baseDark)'} color={'var(--white)'}>
          <Container>
            <Grid>
              <div className="grid__col grid__col--1-of-2">
                <h2 style={{ marginTop: '80px'}}>Launch and Grow Your Freelance Business</h2>
                <p className="lead">Everything to start and run your freelance business all in one place. Download the public beta.</p>
                <p>
                  <i>Coming Soon!</i>
                </p>
                {/*<a
                  href="https://play.google.com/apps/testing/com.soleventure"
                  style={{
                    display: 'inline-block',
                    margin: '0 16px 0 0'
                  }}
                >
                  <img
                    src="/static/images/play-store.svg"
                    height="50"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/soleventure"
                  style={{
                    display: 'inline-block',
                  }}
                >
                  <img
                    src="/static/images/app-store.svg"
                    height="50"
                  />
                </a>*/}
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
            </Grid>
          </Container>
        </FullWidth>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--12-of-12">
                <div style={{ textAlign: 'center'}}>
                  <h3>Beta Test Screening Questions</h3>
                  <p className="lead">Fill out the form to try our the Beta!</p>
                </div>
              </div>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <HubspotForm
                  portalId='6775904'
                  formId='0cc970b9-6d67-4f6e-8053-6b5983813866'
                  onSubmit={() => console.log('Submitted!')}
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

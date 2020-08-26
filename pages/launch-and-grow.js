import React, { useState } from 'react'
import Layout from '@components/Layout'
import { Grid, Container } from '@components/Grid' 
import styled from 'styled-components'

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
                <p className="lead">Be the first to test SoleVenture’s freelance app and give us feedback! Sign up for the beta by filling out the form below.</p>
                <a
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
                </a>
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

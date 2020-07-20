import Layout from '@components/Layout'
import { Container, Grid } from '@components/Grid'
import styled from 'styled-components'
import { Box } from '@components/Box'
import { ButtonGhost, ButtonGhostLinkContainer } from '@components/Button'
import Link from 'next/link'

const FullWidth = styled.div`
  padding-top: 88px;
  padding-bottom: ${({ theme }) => theme.space[7]};
  text-align: ${props => props.center ? 'center' : 'initial'};
  background: ${props => props.bg ? props.bg : 'transparent'};
  color: ${props => props.color ? props.color : 'inherit'};
`

const PressKit = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Contact`} description={description}>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <Box
                  bg={'var(--beige)'}
                  color={'var(--beigeDark)'}
                  marginBottom={'24px'}
                >
                  <h2>Press Kit</h2>
                  <p className="lead">SoleVenture is a consumer-first platform that intelligently automates formation, has portable benefits for wherever work takes you, cashflow management, and projects when you need it.</p>
                </Box>
                <Grid>
                  <div className="grid__col grid__col--2-of-3">
                    <p>SoleVenture is a consumer-first platform that intelligently automates formation, has portable benefits for wherever work takes you, cashflow management, and projects when you need it.</p>
                    <p>How we work has changed, but how we gain income and benefits is stuck in the past. Our clients were professionals and small businesses struggling to grow with the high cost of health insurance and administrative burdens. Our clients were large companies and government entities supplementing their workforce with contractors with no way to retain their talent. We grew tired of the status quo. We’ve taken our decades of industry experience to move us forward.</p>
                  </div>
                  <div className="grid__col grid__col--1-of-3">
                    <div style={{ marginBottom: '16px' }}>
                      <ButtonGhostLinkContainer
                        href="/static/soleVenture-logos/SV-logos.zip"
                        download
                        color={'var(--primary)'}
                        display={'block'}
                      >
                        Download Logos
                      </ButtonGhostLinkContainer>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <ButtonGhostLinkContainer
                        href="/static/soleVenture-team/SV-team.zip"
                        color={'var(--green)'}
                        display={'block'}
                      >
                        Download Team Photos
                      </ButtonGhostLinkContainer>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <Link href="/style-guide">
                        <a>
                          <ButtonGhost
                            color={'var(--red)'}
                            display={'block'}
                          >
                            Style Guide
                          </ButtonGhost>
                        </a>
                      </Link>
                    </div>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Container>
        </FullWidth>
      </Layout>
    </>
  )
}

export default PressKit

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
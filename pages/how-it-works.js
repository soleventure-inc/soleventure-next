import Layout from '@components/Layout'
import { Container, Grid } from '@components/Grid'
import styled from 'styled-components'
import Link from 'next/link'
import { Button } from '@components/Button'
import { BadgeGhost } from '@components/Badge'
import CTA from '@components/CTA'

const FullWidth = styled.div`
  padding-top: 88px;
  padding-bottom: ${({ theme }) => theme.space[7]};
  text-align: ${props => props.center ? 'center' : 'initial'};
  background: ${props => props.bg ? props.bg : 'transparent'};
  color: ${props => props.color ? props.color : 'inherit'};
`

const LargeView = styled.section`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[4]}) {
    display: none;
  }
`

const SmallView = styled.section`
  border-top: 1px solid var(--baseLight);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[4]}) {
    display: none;
  }
`

const HowItWorks = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | How it Works`} description={description}>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--1-of-4 grid__col--centered">
                <img
                  src="static/images/launch-and-grow.png"
                  style={{
                    display: 'block',
                    margin: 'auto',
                    width: '100%'
                  }}
                />
              </div>
              <div className="grid__col grid__col--12-of-12">
                <div style={{ textAlign: 'center' }}>
                  <h1>The workforce has changed</h1>
                  <p
                    style={{ color: 'var(--primary)'}}
                    className="lead"
                  >
                    We are here to help.
                  </p>
                  <p className="lead">
                    SoleVenture is a consumer-first platform that intelligently automates formation, has portable benefits for wherever work takes you, cashflow management, and projects when you need it.
                  </p>
                </div>
                <div className="grid__col grid__col--12-of-12">
                  <h4>How it Works</h4>
                </div>
              </div>
            </Grid>
          </Container>
        </FullWidth>

        <SmallView>
          <FullWidth>
            <Container>
              <Grid>
                <div className="grid__col grid__col--12-of-12">

                  <BadgeGhost
                    color={'var(--primary)'}
                  >
                    Step #1
                  </BadgeGhost>
                  <h3>Build Your Plan</h3>
                  <p className="lead">You spend time building your business, we help with formation and ensure you are compliant.</p>
                  <Link href="/launch-and-grow">
                    <a>
                      <Button
                        bg={'var(--primary)'}
                        color={'var(--white)'}
                      >
                        Get Started
                      </Button>
                    </a>
                  </Link>
                  <img
                    src="/static/images/mobile-step-1.png"
                    style={{
                      display: 'block',
                      width: '100%',
                      margin: 'auto',
                      maxWidth: '350px',
                      marginTop: '32px',
                      borderRadius: '8px',
                      border: '1px solid var(--baseLight)'
                    }}
                  />
                </div>
              </Grid>
            </Container>
          </FullWidth>
        </SmallView>

        <SmallView>
          <FullWidth>
            <Container>
              <Grid>
                <div className="grid__col grid__col--12-of-12">

                  <BadgeGhost
                    color={'var(--orange)'}
                  >
                    Step #2
                  </BadgeGhost>
                  <h3>Get Paid</h3>
                  <p className="lead">We streamline your cashflow with tools like Smart Invoicing, so you can focus on growing your business.</p>
                  <Link href="/launch-and-grow">
                    <a>
                      <Button
                        bg={'var(--orange)'}
                        color={'var(--white)'}
                      >
                        Get Started
                      </Button>
                    </a>
                  </Link>
                  <img
                    src="/static/images/mobile-step-2.png"
                    style={{
                      display: 'block',
                      width: '100%',
                      margin: 'auto',
                      maxWidth: '350px',
                      marginTop: '32px',
                      borderRadius: '8px',
                      border: '1px solid var(--baseLight)'
                    }}
                  />

                </div>
              </Grid>
            </Container>
          </FullWidth>
        </SmallView>

        <SmallView>
          <FullWidth>
            <Container>
              <Grid>
                <div className="grid__col grid__col--12-of-12">

                  <BadgeGhost
                    color={'var(--baseDark)'}
                  >
                    Step #3
                  </BadgeGhost>
                  <h3>Automate your Paycheck</h3>
                  <p className="lead">Link your accounts, automate your tax savings, and plan for vacations and time off.</p>
                  <p className="lead">No more surprise tax bills at the end of year. Start enjoying the freedom of self-employment with money for those planned and unplanned days off.</p>
                  <Link href="/launch-and-grow">
                    <a>
                      <Button
                        bg={'var(--primaryDark)'}
                        color={'var(--white)'}
                      >
                        Get Started
                      </Button>
                    </a>
                  </Link>
                  <img
                    src="/static/images/mobile-step-3.png"
                    style={{
                      display: 'block',
                      width: '100%',
                      margin: 'auto',
                      maxWidth: '350px',
                      marginTop: '32px',
                      borderRadius: '8px',
                      border: '1px solid var(--baseLight)'
                    }}
                  />

                </div>
              </Grid>
            </Container>
          </FullWidth>
        </SmallView>

        <SmallView>
          <FullWidth>
            <Container>
              <Grid>
                <div className="grid__col grid__col--12-of-12">

                  <BadgeGhost
                    color={'var(--green)'}
                  >
                    Step #4
                  </BadgeGhost>
                  <h3>Reap the Benefits</h3>
                  <p className="lead">Access a network of major medical, dental, vision, and life insurance plans on and off the ACA marketplace.</p>
                  <p className="lead">We're like your virtual HR Department. We’ll connect you with affordable benefits for you and your family.</p>
                  <Link href="/launch-and-grow">
                    <a>
                      <Button
                        bg={'var(--green)'}
                        color={'var(--white)'}
                      >
                        Get Started
                      </Button>
                    </a>
                  </Link>
                  <img
                    src="/static/images/mobile-step-4.png"
                    style={{
                      display: 'block',
                      width: '100%',
                      margin: 'auto',
                      maxWidth: '350px',
                      marginTop: '32px',
                      borderRadius: '8px',
                      border: '1px solid var(--baseLight)'
                    }}
                  />

                </div>
              </Grid>
            </Container>
          </FullWidth>
        </SmallView>

        <LargeView>
          <FullWidth bg={'var(--primary)'} color={'var(--white)'}>
            <Container>
              <Grid>
                <div className="grid__col grid__col--1-of-2">
                  <BadgeGhost
                    color={'var(--beige)'}
                  >
                    Step #1
                  </BadgeGhost>
                  <h3>Build Your Plan</h3>
                  <p className="lead">You spend time building your business, we help with formation and ensure you are compliant.</p>
                  <Link href="/launch-and-grow">
                    <a>
                      <Button
                        size={'lg'}
                        bg={'var(--white)'}
                        color={'var(--primary)'}
                      >
                        Get Started
                      </Button>
                    </a>
                  </Link>
                </div>
                <div className="grid__col grid__col--1-of-4"></div>
                <div className="grid__col grid__col--1-of-4">
                  <img
                    src="static/images/screen-step-1.png"
                    style={{
                      display: 'block',
                      width:"100%",
                      paddingTop: '32px'
                    }}
                  />
                </div>
              </Grid>
            </Container>
          </FullWidth>
          <FullWidth bg={'var(--primaryDark)'} color={'var(--white)'}>
            <Container>
              <Grid>
                <div className="grid__col grid__col--1-of-4">
                  <img
                    src="static/images/screen-step-2.png"
                    style={{
                      display: 'block',
                      width:"100%",
                      paddingTop: '32px'
                    }}
                  />
                </div>
                <div className="grid__col grid__col--1-of-4"></div>
                <div className="grid__col grid__col--1-of-2">
                  <BadgeGhost
                    color={'var(--teal)'}
                  >
                    Step #2
                  </BadgeGhost>
                  <h3>Get Paid</h3>
                  <p className="lead">We streamline your cashflow with tools like Smart Invoicing, so you can focus on growing your business.</p>
                  <Link href="/launch-and-grow">
                    <a>
                      <Button
                        size={'lg'}
                        bg={'var(--orange)'}
                        color={'var(--white)'}
                      >
                        Get Started
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
            </Container>
          </FullWidth>
          <FullWidth bg={'var(--teal)'} color={'var(--baseDark)'}>
            <Container>
              <Grid>
                <div className="grid__col grid__col--1-of-2">
                  <BadgeGhost
                    color={'var(--baseDark)'}
                  >
                    Step #3
                  </BadgeGhost>
                  <h3>Automate your Paycheck</h3>
                  <p className="lead">Link your accounts, automate your tax savings, and plan for vacations and time off.</p>
                  <p className="lead">No more surprise tax bills at the end of year. Start enjoying the freedom of self-employment with money for those planned and unplanned days off.</p>
                  <Link href="/launch-and-grow">
                    <a>
                      <Button
                        size={'lg'}
                        bg={'var(--primaryDark)'}
                        color={'var(--white)'}
                      >
                        Get Started
                      </Button>
                    </a>
                  </Link>
                </div>
                <div className="grid__col grid__col--1-of-4"></div>
                <div className="grid__col grid__col--1-of-4">
                  <img
                    src="static/images/screen-step-3.png"
                    style={{
                      display: 'block',
                      width:"100%",
                      paddingTop: '32px'
                    }}
                  />
                </div>
              </Grid>
            </Container>
          </FullWidth>
          <FullWidth bg={'var(--baseDark)'} color={'var(--white)'}>
            <Container>
              <Grid>
                <div className="grid__col grid__col--1-of-4">
                  <img
                    src="static/images/screen-step-4.png"
                    style={{
                      display: 'block',
                      width:"100%",
                      paddingTop: '32px'
                    }}
                  />
                </div>
                <div className="grid__col grid__col--1-of-4"></div>
                <div className="grid__col grid__col--1-of-2">
                  <BadgeGhost
                    color={'var(--orange)'}
                  >
                    Step #4
                  </BadgeGhost>
                  <h3>Reap the Benefits</h3>
                  <p className="lead">Access a network of major medical, dental, vision, and life insurance plans on and off the ACA marketplace.</p>
                  <p className="lead">We're like your virtual HR Department. We’ll connect you with affordable benefits for you and your family.</p>
                  <Link href="/launch-and-grow">
                    <a>
                      <Button
                        size={'lg'}
                        bg={'var(--primary)'}
                        color={'var(--white)'}
                      >
                        Get Started
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
            </Container>
          </FullWidth>
        </LargeView>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <CTA/>
              </div>
            </Grid>
          </Container>
        </FullWidth>
      </Layout>
    </>
  )
}

export default HowItWorks

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
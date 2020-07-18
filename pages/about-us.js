import Layout from '@components/Layout'
import { Container, Grid } from '@components/Grid'
import styled from 'styled-components'
import { Box } from '@components/Box'
import { ButtonLinkContainer, Button } from '@components/Button'

const FullWidth = styled.div`
  padding-top: 88px;
  padding-bottom: ${({ theme }) => theme.space[5]};
  text-align: ${props => props.center ? 'center' : 'initial'};
  background: ${props => props.bg ? props.bg : 'transparent'};
  color: ${props => props.color ? props.color : 'inherit'};
`

const SocialItem = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  margin-left: ${({ theme }) => theme.space[3]};
`

const AboutUs = ({ title, description, ...props }) => {

  const team = {
    eve: {
      name: 'Eve Epstein',
      img: '/static/soleVenture-team/eve.png',
      role: 'CEO / Founder',
      main: 'When I finished law school, the recession had a firm grip on our country. I, like so many Americans, was clinging to the idea that the only path to financial security was a job with a steady paycheck and health insurance.',
      sub: 'From my years of practicing labor and employment law, I saw that the workforce changed. By 2028, more than half of the US workforce will be freelancing. Freelancers\' greatest pain points are steady income and affordable healthcare. I thought, what if independent workers could band together to have the same financial security and benefits of a big company? This is where the idea of SoleVenture was born.',
      linkedin: 'https://www.linkedin.com/in/eveepstein/'
    },
    robyn: {
      name: 'Robyn Rusignuolo',
      img: '/static/soleVenture-team/robyn.png',
      role: 'COO / Founder',
      main: 'After working as a corporate attorney, I transitioned into HR and healthcare operations in 2012. Most recently, while serving as the Chief Operating Officer of a 30,000-employee professional employer organization (PEO), I delivered HR technology and back-office support to clients nationwide.',
      sub: 'Over the past few years, it became apparent that the nature of work was changing quickly. More companies were hiring independent contractors, while more individuals wanted the freedom and flexibility that freelancing provides. Leveraging my experience with launching new business lines and designing HR solutions, I partnered with Eve to build SoleVenture and empower the rapidly growing freelance economy.',
      linkedin: 'https://www.linkedin.com/in/robyn-rusignuolo-605b8746/'
    }
  }
  return (
    <>
      <Layout pageTitle={`${title} | About Us`} description={description}>
        <FullWidth center>
          <Container>
            <Grid>
              <div className="grid__col grid__col--12-of-12">
                <img
                  src="/static/soleVenture-team/about-us-icon.png"
                  width="120"
                  alt="About Us"
                  style={{
                    boxShadow: '0px 0px 0px 4px var(--baseLight)',
                    borderRadius: '50%'
                  }}
                />
                <h1>The SoleVenture Team</h1>
                <p className="lead">We're inspiring entrepreneurship by fostering economic independence.</p>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <hr/>
        <Container>
          <Grid>
            <div className="grid__col grid__col--2-of-3 grid__col--centered">
              <h4>Our Leadership Team</h4>
              <p>SoleVenture is a different kind of tech startup. Co-founders, Eve Epstein and Robyn Rusignuolo, are accomplished, professional women who grew business lines in both corporations and the public sector.</p>
              <p>How we work has changed, but how we gain income and benefits is stuck in the past. Our clients were professionals and small businesses struggling to grow with the high cost of health insurance and administrative burdens. Our clients were large companies and government entities supplementing their workforces with contractors and no way to offer them benefits. We grew tired of the status quo. We’ve taken our decades of industry experience to move us forward. Here is how we came together to build SoleVenture.</p>
            </div>
          </Grid>
        </Container>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--4-of-12 grid__col--m-1-of-2">
                <div
                  style={{
                    marginBottom: '32px',
                    boxShadow: '-12px 12px 0px var(--primary)'
                  }}
                >
                  <img
                    src={team.eve.img}
                    alt={team.eve.name}
                    style={{
                      display: 'block',
                      width: '100%',
                    }}
                  />
                </div>
              </div>
              <div className="grid__col grid__col--1-of-12"></div>
              <div className="grid__col grid__col--7-of-12">
                <h4
                  style={{
                    marginTop: '0',
                    marginBottom: '8px'
                  }}
                >
                  {team.eve.name}
                </h4>
                <div
                  style={{
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px'
                  }}
                >
                  <span>{team.eve.role}</span>
                  <SocialItem href={team.eve.linkedin} target="_blank">
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512'>
                      <path fill="currentColor" d='M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z'/>
                    </svg>
                  </SocialItem>
                </div>
                <p>
                  {team.eve.main}
                </p>
                <p>
                  <small>
                    {team.eve.sub}
                  </small>
                </p>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <hr/>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--4-of-12 grid__col--m-1-of-2">
                <div
                  style={{
                    marginBottom: '32px',
                    boxShadow: '-12px 12px 0px var(--teal)'
                  }}
                >
                  <img
                    src={team.robyn.img}
                    alt={team.robyn.name}
                    style={{
                      display: 'block',
                      width: '100%',
                    }}
                  />
                </div>
              </div>
              <div className="grid__col grid__col--1-of-12"></div>
              <div className="grid__col grid__col--7-of-12">
                <h4
                  style={{
                    marginTop: '0',
                    marginBottom: '8px'
                  }}
                >
                  {team.robyn.name}
                </h4>
                <div
                  style={{
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '16px'
                  }}
                >
                  <span>{team.robyn.role}</span>
                  <SocialItem href={team.robyn.linkedin} target="_blank">
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512'>
                      <path fill="currentColor" d='M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z'/>
                    </svg>
                  </SocialItem>
                </div>
                <p>
                  {team.robyn.main}
                </p>
                <p>
                  <small>
                    {team.robyn.sub}
                  </small>
                </p>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <hr/>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <h4>
                  A bit about us...
                </h4>
                <Grid>
                  <div className="grid__col grid__col--1-of-2">
                    <Box
                      bg={'var(--baseLightest)'}
                      color={'var(--primary)'}
                      marginBottom={'16px'}
                    >
                      Woman-Owned Business
                    </Box>
                  </div>
                  <div className="grid__col grid__col--1-of-2">
                    <Box
                      bg={'var(--baseLightest)'}
                      color={'var(--primary)'}
                      marginBottom={'16px'}
                    >
                      Data law security expertise
                    </Box>
                  </div>
                  <div className="grid__col grid__col--1-of-2">
                    <Box
                      bg={'var(--baseLightest)'}
                      color={'var(--primary)'}
                      marginBottom={'16px'}
                    >
                      Robust tech team and advisors
                    </Box>
                  </div>
                  <div className="grid__col grid__col--1-of-2">
                    <Box
                      bg={'var(--baseLightest)'}
                      color={'var(--primary)'}
                      marginBottom={'16px'}
                    >
                      20+ years employment law
                    </Box>
                  </div>
                  <div className="grid__col grid__col--1-of-2">
                    <Box
                      bg={'var(--baseLightest)'}
                      color={'var(--primary)'}
                      marginBottom={'16px'}
                    >
                      15 years in PEO industry
                    </Box>
                  </div>
                </Grid>
                <Box
                  bg={'var(--beige)'}
                  color={'var(--beigeDark)'}
                  marginTop={'48px'}
                >
                  <div style={{textAlign: 'center'}}>
                    <h4>Join our team</h4>
                    <p>If you’re passionate about reimagining consumer applications, we’d love to hear from you.</p>
                    <ButtonLinkContainer href="mailto:support@soleventure.com">
                      Contact Us
                    </ButtonLinkContainer>
                  </div>
                </Box>
              </div>
            </Grid>
          </Container>
        </FullWidth>
      </Layout>
    </>
  )
}

export default AboutUs

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
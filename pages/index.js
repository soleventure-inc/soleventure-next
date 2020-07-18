import Layout from '@components/Layout'
import { Section, Container, Grid, Col } from '@components/Grid'
import styled from 'styled-components'
import { ButtonLink } from '@components/Button'

const Hero = styled(Section)`
  height: 655px;
  overflow-y: hidden;
  padding-bottom: ${({ theme }) => theme.space[6]};
  padding-top: ${({ theme }) => theme.space[6]};
  text-align: left;
  background: var(--primary);
  color: var(--white);
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[4]}) {
    text-align: center;
    padding-bottom: 0;
  }
`

const HeroImgContainer = styled.div`
  height: calc(${({ theme }) => theme.space[9]} + ${({ theme }) => theme.space[9]} + ${({ theme }) => theme.space[4]});
  padding-top: ${({ theme }) => theme.space[4]};
  overflow-y: hidden;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[4]}) {
    position: relative;
    height: 100%;
    width: 100%;
    overflow-y: initial;
  }
`

const HeroImg = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-height: 550px;
  width: auto;
  display: block;
`

const FullWidth = styled.div`
  padding-top: 88px;
  padding-bottom: ${({ theme }) => theme.space[5]};
`

const SignUpButton = styled(ButtonLink)`
  margin-right: ${({ theme }) => theme.space[2]};
`

const Index = ({ title, description, ...props }) => {

  const section1 = [
    {
      img: '/static/images/business.svg',
      name: 'Set up your business'
    }, {
      img: '/static/images/benefits.svg',
      name: 'Access affordable benefits'
    }, {
      img: '/static/images/savings.svg',
      name: 'Manage your savings'
    }, {
      img: '/static/images/money.svg',
      name: 'Track your money'
    }, {
      img: '/static/images/work.svg',
      name: 'Gain work'
    }, {
      img: '/static/images/hire.svg',
      name: 'Hire freelancers'
    }
  ]

  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Hero>
          <Container>
            <Grid>
              <div className="grid__col grid__col--1-of-2">
                <h1
                  style={{
                    marginTop: '88px'
                  }}
                >Employ Yourself</h1>
                <h5 style={{
                  color: 'var(--teal)'
                }}>The back-office platform for your company of one</h5>
                <p className="lead">Start your company. Access personal benefits. Grow with our community of self-employed professionals.</p>
                <ButtonLink href="/launch-and-grow"
                  bg={'var(--baseDark)'}
                  color={'var(--white)'}
                  marginRight="8px"
                  size="lg"
                >
                  <a>
                    Sign up
                  </a>
                </ButtonLink>
                <ButtonLink href="/launch-and-grow"
                  bg={'rgba(255,255,255,.2)'}
                  color={'var(--white)'}
                  size="lg"
                >
                  <a>
                    Learn More
                  </a>
                </ButtonLink>
              </div>
              <div className="grid__col grid__col--1-of-2">
                <HeroImgContainer>
                  <HeroImg src="/static/images/hero-3d.png"/>
                </HeroImgContainer>
              </div>
            </Grid>
          </Container>
        </Hero>

        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--1-of-2 grid__col--centered" style={{ textAlign: 'center' }}>
                <h3>A platform that supports the way you work</h3>
                <p style={{ color: 'var(--primary)'}}>You're not alone.</p>
              </div>
              <div className="grid__col grid__col--2-of-3 grid__col--centered" style={{ textAlign: 'center' }}>
                <p>There are now 57 million Americans in the freelance economy enjoying the freedom and flexibility of self-employment. The trade-off is that we are spending nearly <strong>half</strong>&nbsp;of our time on administrative tasks and generating new work. <strong>SoleVenture is here to help you manage your back-office so that you can grow your business.</strong></p>
                <ButtonLink href="/launch-and-grow"
                  bg={'var(--red)'}
                  color={'var(--white)'}
                >
                  <a>
                    Learn More
                  </a>
                </ButtonLink>
              </div>
            </Grid>
            <Grid>
              {
                section1.map(image => (
                  <div key={image.name} className="grid__col grid__col--1-of-6 grid__col--m-1-of-3 grid__col--s-1-of-2">
                    <div style={{ marginBottom: '16px', marginTop: '40px', textAlign: 'center'}}>
                      <img height="48" src={image.img}/>
                      <div style={{ marginTop: '8px' }}>
                        <small>{image.name}</small>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Grid>
          </Container>
        </FullWidth>

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

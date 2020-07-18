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

const SignUpButton = styled(ButtonLink)`
  margin-right: ${({ theme }) => theme.space[2]};
`

const Index = ({ title, description, ...props }) => {
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
                <SignUpButton size='lg' href="/launch-and-grow" bg="var(--baseDark)" color="var(--white)">
                  Sign Up for the Beta
                </SignUpButton>
                <ButtonLink size='lg' href="/launch-and-grow" bg="rgba(255,255,255,.2)" color="var(--white)">
                  Learn More
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

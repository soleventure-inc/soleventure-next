import Layout from '@components/Layout'
import { Section, Container, Grid, Col } from '@components/Grid'
import styled from 'styled-components'
import { Button, ButtonLink, ButtonGhostLink } from '@components/Button'
import Accordion from '@components/Accordion'
import { Box } from '@components/Box'
import Link from 'next/link'
import CTA from '@components/CTA'

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
  width: 100%;
  display: block;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[6]}) {
    max-height: 550px;
    width: auto;
  }
`

const FullWidth = styled.div`
  padding-top: 88px;
  padding-bottom: ${({ theme }) => theme.space[5]};
`

const Feature = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[4]};
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

  const features = [
    {
      img: '/static/images/business-setup-icon.svg',
      name: 'Business Setup',
      benefits: ['Incorporation', 'Compliance']
    }, {
      img: '/static/images/benefits-icon.svg',
      name: 'Benefits',
      benefits: ['Health, Dental, Vision', 'Supplemental Plans']
    }, {
      img: '/static/images/admin-icon.svg',
      name: 'Admin',
      benefits: ['Cashflow Management', 'Invoicing', 'Tax Management']
    }, {
      img: '/static/images/work-icon.svg',
      name: 'Work',
      benefits: ['Project Matching', 'Exclusive Network', 'Gain Referrals']
    }
  ]

  const faqs = [
    {
      title: 'How does SoleVenture work?',
      answer: 'The SoleVenture platform automates business formation, access to portable benefits, cashflow management, invoicing, and finding jobs. By streamlining your business, we save you valuable time so you can focus on generating more revenue and enjoying life. We built SoleVenture because we were frustrated that freelancers are forced to use so many different solutions to manage business activities. Between accessing insurance, invoicing clients, forming a business entity, tracking spending, estimating taxes, and finding work, freelancers lose up to 20 hours of billable time a week. And what’s worse is that these solutions can cost thousands of dollars a year. We consolidate all your business needs into one place to seamlessly manage the future of work.'
    }, {
      title: 'Who can use SoleVenture?',
      answer: 'SoleVenture supports all freelancers, gig workers, and independent professionals.'
    }, {
      title: 'Why should I use SoleVenture?',
      answer: 'Independent professionals typically spend half of their time doing administrative tasks and trying to find new business. If you want to spend more time earning money and enjoying the freedom of self-employment, SoleVenture is for you.'
    }, {
      title: 'What do I need to get started?',
      answer: 'All you need is an Android or iOS device.'
    }, {
      title: 'Do I need to have my own company to use SoleVenture?',
      answer: 'No. You do not need to be incorporated as a business to use SoleVenture. However, because there may be some important benefits that come along with setting up your own company, we provide our members with business formation services. We make it easy to file as an LLC, a C-Corp, or an S-Corp just by answering a few easy questions.'
    }, {
      title: 'How long does it take to create an account?',
      answer: 'Most of our users create their accounts in under 5 minutes.'
    }, {
      title: 'How do I get set up for invoicing and tax management support?',
      answer: 'SoleVenture doesn’t collect any documents from you, but you will need to answer questions to confirm your identity and provide information to connect your US bank accounts. If you want to use our invoicing feature, we partner with Stripe and require a Stripe account to use this functionality.'
    }, {
      title: 'Is SoleVenture secure?',
      answer: 'We take our members’ privacy and security very seriously. SoleVenture follows strict guidelines and standards to ensure our platform and encryption is keeping your personal and financial information protected. While we do not disclose specific security procedures in an effort to keep your information as secure as possible, please note that we do submit our technology to regular security reviews, audits, and testing. In addition, all of our partners are carefully selected to ensure that they, too, maintain strict security processes.'
    }, {
      title: 'How much does SoleVenture cost?',
      answer: 'We are a new app and value the fact that you are taking the freelancing journey with us. At this time, most SoleVenture features are completely free for you to use. We charge a pass-through cost to help you incorporate your business, and when you invoice your customers, you are charged the industry standard rate of 2.9% plus $.30 per invoice.'
    }, {
      title: 'Do I have to create a new bank account like other financial apps?',
      answer: 'No. Unlike other financial apps, we never touch your money or open accounts in your name. You can connect your existing accounts to manage your cashflow and your business expenses.'
    }, {
      title: 'How do I use the health insurance and other benefits of SoleVenture?',
      answer: 'When you create a SoleVenture account, we help you access insurance products designed for your needs. You will have access to a network of major medical, dental, vision, and life insurance plans on and off the ACA marketplace.'
    }, {
      title: 'Can SoleVenture help me find clients and customers?',
      answer: 'Yes. SoleVenture is a community of independent professionals. Based on your industry data and project needs, we match you with other members who are your ideal clients and customers.'
    }, {
      title: 'Will SoleVenture offer additional services in the future?',
      answer: 'Yes! This is a platform built for you and by you. As our membership grows, we will identify future features like nationwide business formation, payroll, staffing, professional insurances, and health reimbursement arrangements for small business owners.'
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
                <ButtonGhostLink href="/launch-and-grow"
                  color={'var(--red)'}
                >
                  <a>
                    Learn More
                  </a>
                </ButtonGhostLink>
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
        <hr/>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--1-of-2">
                <h3>The freedom to leap towards economic independence</h3>
                <p>Do you enjoy flexible hours? Does the worry of finding work and accessing benefits stop you from working for yourself?</p>
                <p>
                  <strong style={{ color: 'var(--primary)'}}>You’re not alone. SoleVenture supports you on the journey of self-employment.</strong>
                </p>
                <ButtonGhostLink href="/launch-and-grow"
                  color={'var(--primary)'}
                >
                  <a>
                    Learn how it works
                  </a>
                </ButtonGhostLink>
              </div>
              <div className="grid__col grid__col--1-of-2">
                <img
                  className="u-animate--float"
                  src="/static/images/levitate.svg"
                  style={{
                    display: 'block',
                    width: '100%'
                  }}
                />
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <hr/>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--1-of-2">
                <img
                  src="/static/images/illustrations/groovy.svg"
                  style={{
                    display: 'block',
                    width: '100%'
                  }}
                />
              </div>
              <div className="grid__col grid__col--1-of-2">
                <h3>The foundation for your entreprenurial journey</h3>
                <p>SoleVenture supports independent professionals from formation to growth. Gain access to powerful cashflow and tax savings tools, portable benefits, and a network to fuel your business. <strong>Get ready to employ yourself!</strong></p>
                <ButtonGhostLink href="/launch-and-grow"
                  color={'var(--primary)'}
                >
                  <a>
                    Explore the Benefits
                  </a>
                </ButtonGhostLink>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <hr/>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--1-of-2">
                <h3>What features can I access?</h3>
                <p>The infrastructure you need to build and grow a business from formation, tax setup and invoicing, to the personal benefits of traditional employment — including referrals, cashflow management, health, dental, vision, and limited medical plans.</p>
                <ButtonGhostLink href="/launch-and-grow"
                  color={'var(--primary)'}
                >
                  <a>
                    See How it Works &rarr;
                  </a>
                </ButtonGhostLink>
              </div>
              <div className="grid__col grid__col--1-of-2">
                <Grid>
                  {
                    features.map(item => (
                      <div key={item.name} className="grid__col grid__col--1-of-2 grid__col--m-1-of-2 grid__col--s-1-of-2">
                        <Feature>
                          <img
                            width="40"
                            src={item.img}
                            alt={item.name}
                          />
                          <div
                            className="lead"
                            style={{
                              marginBottom: '16px',
                              marginTop: '16px'
                            }}
                          >
                            <strong>{item.name}</strong>
                          </div>
                          {
                            item.benefits.map(benefit => (
                              <div
                                key={benefit}
                                style={{
                                  marginBottom: '8px'
                                }}
                              >
                                {benefit}
                              </div>
                            ))
                          }
                        </Feature>
                      </div>
                    ))
                  }
                </Grid>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <hr/>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--12-of-12">
                <h5>FAQs</h5>
              </div>
              <div className="grid__col grid__col--1-of-2">
                <div style={{ marginBottom: '24px'}}>
                  {
                    faqs.map(faq => (
                      <Accordion title={faq.title} content={faq.answer} key={faq.title}/>
                    ))
                  }
                </div>
              </div>
              <div className="grid__col grid__col--1-of-2">
                <CTA/>
              </div>
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

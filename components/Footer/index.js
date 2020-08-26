import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Container, Grid } from '@components/Grid'
import { ButtonLink } from '@components/Button'

const FooterContainer = styled.footer`
  margin-top: ${({ theme }) => theme.space[5]};
  padding-top: ${({ theme }) => theme.space[5]};
  padding-bottom: ${({ theme }) => theme.space[5]};
  border-top: 1px solid var(--baseLight);
`

const FooterList = styled.ul`
  margin: 0 0 ${({ theme }) => theme.space[4]};
  padding: 0;
  list-style-type: none;
`

const FooterListItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.space[2]};
  }
`

const FooterLogo = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[5]};
`

const FooterLogoImg = styled.img`
  margin-right: ${({ theme }) => theme.space[3]};
  width: ${({ theme }) => theme.space[5]};
  height: ${({ theme }) => theme.space[5]};
`

const SocialLink = styled.a`
  width: ${({ theme }) => theme.space[5]};
  height: ${({ theme }) => theme.space[5]};
  display: inline-flex;
  align-items:center;
  justify-content: center;
  &:not(:first-of-type) {
    margin-left: ${({ theme }) => theme.space[3]};
  }
`

const Social = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[5]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[6]}) {
    justify-content: flex-end;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[4]}) {
    justify-content: flex-end;
  }
`

const DownloadContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.space[3]};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[4]}) {
    justify-content: flex-start;
  }
`

export default function Footer() {

  const primaryNav = [
    {
      type: 'local',
      name: 'Terms',
      link: '/terms'
    }, {
      type: 'local',
      name: 'Privacy Policy',
      link: '/privacy-policy'
    }, {
      type: 'local',
      name: 'Contact',
      link: '/contact'
    }, {
      type: 'local',
      name: 'Press Kit',
      link: '/press-kit'
    }
  ]

  const secondaryNav = [
    {
      type: 'local',
      name: 'How it Works',
      link: '/how-it-works'
    }, {
      type: 'out',
      name: 'Insurance',
      link: 'https://marketing.soleventure.com/insurance-partner'
    }, {
      type: 'out',
      name: 'Blog',
      link: 'https://blog.soleventure.com/blog'
    }, {
      type: 'local',
      name: 'About Us',
      link: '/about-us'
    }
  ]

  return (
    <>
     <FooterContainer>
       <Container>
         <Grid>
           <div className="grid__col grid__col--1-of-3 grid__col--m-1-of-2 grid__col--s-1-of-2">
            <FooterList>
              {
                primaryNav.map(item => (
                  <FooterListItem key={item.name}>
                    {
                      item.type === 'local' ?
                      (
                        <Link href={item.link}>
                          {item.name}
                        </Link>
                      )
                      :
                      (
                        <a href={item.link}>
                          {item.name}
                        </a>
                      )
                    }
                  </FooterListItem>
                ))
              }
            </FooterList>
           </div>
           <div className="grid__col grid__col--1-of-3 grid__col--m-1-of-2 grid__col--s-1-of-2">
           <FooterList>
              {
                secondaryNav.map(item => (
                  <FooterListItem key={item.name}>
                    {
                      item.type === 'local' ?
                      (
                        <Link href={item.link}>
                          {item.name}
                        </Link>
                      )
                      :
                      (
                        <a href={item.link}>
                          {item.name}
                        </a>
                      )
                    }
                  </FooterListItem>
                ))
              }
            </FooterList>
           </div>
           <div className="grid__col grid__col--1-of-3">
             <ButtonContainer>
              <span style={{
                background: 'var(--primary)',
                color: 'var(--white)',
                borderRadius: '999px',
                padding: '8px 16px',
              }}>
                <Link href="/launch-and-grow">
                  Download
                </Link>
              </span>
             </ButtonContainer>
             <DownloadContainer>
              <a
                href="https://play.google.com/apps/testing/com.soleventure"
                style={{
                  display: 'inline-block',
                  margin: '0 16px 0 0'
                }}
              >
                <img
                  src="/static/images/play-store.svg"
                  height="40"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/soleventure"
                style={{
                  display: 'inline-block'
                }}
              >
                <img
                  src="/static/images/app-store.svg"
                  height="40"
                />
              </a>
             </DownloadContainer>
           </div>
           <div className="grid__col grid__col--1-of-2 grid__col--m-1-of-2">
             <FooterLogo>
               <FooterLogoImg src="/static/images/sv_icon.svg"/>
               <small>© Copyright {new Date().getFullYear()} SoleVenture Inc.</small>
             </FooterLogo>
           </div>
           <div className="grid__col grid__col--1-of-2 grid__col--m-1-of-2">
            <Social>
              <SocialLink href="https://www.facebook.com/soleventureevolution/">
                <svg version='1.1' width="32" height="32" xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512'>
                  <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d='M480,257.35c0-123.7-100.3-224-224-224s-224,100.3-224,224 c0,111.8,81.9,204.47,189,221.29V322.12h-56.89v-64.77H221v-49.36c0-56.13,33.45-87.16,84.61-87.16c24.51,0,50.15,4.38,50.15,4.38 v55.13h-28.26c-27.81,0-36.51,17.26-36.51,35v42.02h62.12l-9.92,64.77h-52.2v156.53C398.1,461.85,480,369.18,480,257.35L480,257.35z '/>
                </svg>
              </SocialLink>
              <SocialLink href="http://www.twitter.com/soleventureinc">
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'>
                  <path fill="currentColor" d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z'/>
                </svg>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/soleventure-inc">
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'>
                  <path fill="currentColor" d='M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z'/>
                </svg>
              </SocialLink>
             </Social>
           </div>
         </Grid>
       </Container>
     </FooterContainer>
    </>
  )
}

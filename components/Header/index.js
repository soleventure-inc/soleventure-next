import Link from 'next/link'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { ButtonLink } from '@components/Button'

const HeaderContainer = styled.header`
  width: 100%;
  background: ${transparentize(0.2, '#ffffff')};
  z-index: 100;
  border-bottom: 1px solid var(--baseLight);
  box-shadow: 0 1px 1px ${transparentize(0.9, '#000000')}, 0 4px 12px ${transparentize(0.9, '#000000')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(40px) saturate(200%);
`

const HeaderBody = styled.div`
  max-width: ${({ theme }) => theme.layoutWidth};
  margin: auto;
  padding: ${({ theme }) => theme.space[3]};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Nav = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[3]}) {
    display: none;
  }
`

const LinkStyle = css`
  padding: ${({ theme}) => theme.space[2]};
  text-decoration: none;
  position: relative;
  display: inline-block;
  transition: all 120ms ease-out 0s;
  &:hover, &:focus {
    box-shadow: 0px 2px 0px 0px var(--primary);
  }
`

const NavItem = styled.li`
  a {
    ${LinkStyle}
  }
  &:not(:last-of-type) {
    margin-right: ${({ theme}) => theme.space[2]};
  }
`

const MobileToggle = styled.button`
  background: var(--baseDark);
  color: var(--white);
  display: none;
  width: ${({ theme }) => theme.space[6]};
  height: ${({ theme }) => theme.space[6]};
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[3]}) {
    display: inline-flex;
  }
`

const NavLink = styled(Link)`
  ${LinkStyle}
`

const ExternalNavLink = styled.a`
 ${LinkStyle}
`

export default function Header() {

  const navItems = [
    {
      type: 'local',
      name: 'How it Works',
      href: '/how-it-works'
    },{
      type: 'local',
      name: 'Find Work',
      href: '/find-work'
    },{
      type: 'local',
      name: 'Hire Freelancers',
      href: '/hire-freelancers'
    },{
      type: 'external',
      name: 'Insurance',
      href: 'https://marketing.soleventure.com/insurance-partner'
    },{
      type: 'external',
      name: 'Blog',
      href: 'https://blog.soleventure.com/blog'
    }
  ]

  return (
    <>
      <HeaderContainer>
        <HeaderBody>
          <div>
            <Link href="/">
              <a>
                <img src="/static/images/sv_logo.svg" width="200px" alt="SoleVenture" />
              </a>
            </Link>
          </div>
          <div>
            <MobileToggle>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </MobileToggle>
            <Nav role="navigation">
              {
                navItems.map(navItem => {
                  if(navItem.type === 'local') {
                    return (
                      <NavItem key={navItem.name}>
                        <NavLink className={'navLink'} href={navItem.href}>
                          <a>
                            {navItem.name}
                          </a>
                        </NavLink>
                      </NavItem>
                    )
                  } else {
                    return (
                      <NavItem key={navItem.name}>
                        <ExternalNavLink href={navItem.href}>
                          {navItem.name}
                        </ExternalNavLink>
                      </NavItem>
                    )
                  }
                })
              }
              <NavItem>
                <ButtonLink href="/launch-and-grow"
                  bg={'var(--primary)'}
                  color={'var(--white)'}
                >
                  <a className="c-button">
                    Sign Up
                  </a>
                </ButtonLink>
              </NavItem>
            </Nav>
          </div>
        </HeaderBody>
      </HeaderContainer>
    </>
  )
}

/*
<NavItem key={navItem.name}>
  <NavLink href={navItem.href}>
    <a>
      {navItem.name}
    </a>
  </NavLink>
</NavItem>
*/
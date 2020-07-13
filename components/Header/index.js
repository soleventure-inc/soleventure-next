import Link from 'next/link'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

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
`

const LinkStyle = css`
  padding: ${({ theme}) => theme.space[2]};
  text-decoration: none;
  color: inherit;
  position: relative;
  display: inline-block;
  transition: all 120ms ease-out 0s;
`

const NavItem = styled.li`
  a {
    ${LinkStyle}
  }
  &:not(:last-of-type) {
    margin-right: ${({ theme}) => theme.space[2]};
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
    },{
      type: 'local',
      name: 'About Us',
      href: '/about-us'
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
            <Nav role="navigation">
              {
                navItems.map(navItem => {
                  if(navItem.type === 'local') {
                    return (
                      <NavItem key={navItem.name}>
                        <NavLink href={navItem.href}>
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
                <a href="https://google.com">
                  Sign Up for the Beta
                </a>
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
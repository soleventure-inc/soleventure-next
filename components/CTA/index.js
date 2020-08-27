import { Box } from '@components/Box'
import styled from 'styled-components'

const ButtonBar = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[4]}) {
    flex-direction: column;
  }
`

export default function CTA() {
  return (
    <Box
      bg={'var(--baseDark)'}
      paddingLeft={'40px'}
      paddingRight={'40px'}
      center
    >
      <img
        src="/static/images/icon-success.svg"
        width="88"
      />
      <h4>Get Started</h4>
      <p className="lead">Be the first to test SoleVenture’s freelance app and give us feedback!</p>
      <p style={{color: 'var(--baseMedium)'}}>Start a business • Access benefits • Join a powerful network • Grow your team • Streamline your cashflow</p>
      <ButtonBar>
        <p>
          <i>Coming Soon!</i>
        </p>
        {/*<a
          href="https://play.google.com/apps/testing/com.soleventure"
          style={{
            display: 'inline-block',
            margin: '16px 16px 0'
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
            margin: '16px 16px 0'
          }}
        >
          <img
            src="/static/images/app-store.svg"
            height="50"
          />
        </a>*/}
      </ButtonBar>
    </Box>
  )
}

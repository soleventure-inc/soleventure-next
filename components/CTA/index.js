import { Button } from '@components/Button'
import { Box } from '@components/Box'
import Link from 'next/link'

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
      <Link href="/launch-and-grow">
        <a>
          <Button
            size={'lg'}
            display={'block'}
          >
            Sign Up
          </Button>
        </a>
      </Link>
    </Box>
  )
}
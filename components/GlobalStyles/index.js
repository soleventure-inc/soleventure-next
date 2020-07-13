import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  :root {
    --baseDark: ${({ theme }) => theme.baseDark};
    --baseMedium: ${({ theme }) => theme.baseMedium};
    --baseLight: ${({ theme }) => theme.baseLight};
    --white: ${({ theme }) => theme.white};
    --primary: ${({ theme }) => theme.primary};
    --primaryDark: ${({ theme }) => theme.primaryDark};
    --beige: ${({ theme }) => theme.beige};
    --beigeDark: ${({ theme }) => theme.beigeDark};
    --red: ${({ theme }) => theme.red};
    --orange: ${({ theme }) => theme.orange};
    --pink: ${({ theme }) => theme.pink};
    --green: ${({ theme }) => theme.green};
    --teal: ${({ theme }) => theme.teal};
  }

  html {
    box-sizing: border-box;
  }

  *,*:before,*:after {
    box-sizing: inherit;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: var(--baseDark);
    font-family: ${({ theme }) => theme.fonts.body};
    padding-top: ${({ theme }) => theme.space[7]};
  }

  button, input, select, textarea {
    color: inherit;
    font-family: inherit;
    &:focus, &:after {
      outline: 0;
    }
  }

  button {
    cursor: pointer;
  }

  .img-full {
    width: 100%;
    display: block;
  }
  details {
    summary {
      padding: ${({ theme }) => theme.space[2]} 0;
      outline: none;
      cursor: pointer;
      &:focus, &:active {
        outline: none;
      }
    }
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: all 120ms ease-out;
    &:hover, &:focus {
      opacity: 0.8;
    }
  }
  
  p {
    a {
      color: $primary;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      &:hover, &:focus {
        text-decoration: underline;
      }
      &:visited {
        color: var(--red);
      }
    }
  }
  
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: ${({ theme }) => theme.space[4]};
    margin-top: ${({ theme }) => theme.space[4]};
    word-wrap: break-word;
    font-family: ${({ theme }) => theme.fonts.heading};
  }
  
  h1,h2,h3 {
    font-weight: ${({ theme }) => theme.fontWeights.black};
  }
  
  h4,h5,h6 {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  h1 {
    line-height: ${({ theme }) => theme.lineHeights.largeHeading};
    font-size: ${({ theme }) => theme.fontSizes[6]};
    @media screen and (max-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizesMobile[7]};
    }
  }
  
  h2 {
    line-height: ${({ theme }) => theme.lineHeights.heading};
    font-size: ${({ theme }) => theme.fontSizes[5]};
    @media screen and (max-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizesMobile[6]};
    }
  }

  h3 {
    line-height: ${({ theme }) => theme.lineHeights.heading};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    @media screen and (max-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizesMobile[5]};
    }
  }

  h4 {
    line-height: ${({ theme }) => theme.lineHeights.heading};
    font-size: ${({ theme }) => theme.fontSizes[3]};
    @media screen and (max-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizesMobile[4]};
    }
  }

  h5 {
    line-height: ${({ theme }) => theme.lineHeights.heading};
    font-size: ${({ theme }) => theme.fontSizes[2]};
    @media screen and (max-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizesMobile[3]};
    }
  }

  h6 {
    line-height: ${({ theme }) => theme.lineHeights.smallHeading};
    font-size: ${({ theme }) => theme.fontSizes[1]};
    @media screen and (max-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: ${({ theme }) => theme.fontSizesMobile[1]};
    }
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes[1]};
    line-height: ${({ theme }) => theme.lineHeights.body};
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.space[4]};
  }

  small {
    font-size: ${({ theme }) => theme.fontSizes[0]};
  }
  
  .lead {
    @media screen and (min-width: ${({ theme}) => theme.breakpoints[2]}) {
      font-size: 21px;
    }
  }
  
  .c-list {
    padding: 0 0 0 ${({ theme }) => theme.space[3]};
    margin: 0 0 ${({ theme }) => theme.space[3]};
    li {
      line-height: 1.5;
      &:not(:last-of-type) {
        margin-bottom: ${({ theme }) => theme.space[2]};
      }
    }
  }
  
`
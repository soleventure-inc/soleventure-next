import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --baseDark: ${({ theme }) => theme.colors.baseDark};
    --baseMedium: ${({ theme }) => theme.colors.baseMedium};
    --baseLight: ${({ theme }) => theme.colors.baseLight};
    --white: ${({ theme }) => theme.colors.white};
    --primary: ${({ theme }) => theme.colors.primary};
    --primaryDark: ${({ theme }) => theme.colors.primaryDark};
    --beige: ${({ theme }) => theme.colors.beige};
    --beigeDark: ${({ theme }) => theme.colors.beigeDark};
    --red: ${({ theme }) => theme.colors.red};
    --orange: ${({ theme }) => theme.colors.orange};
    --pink: ${({ theme }) => theme.colors.pink};
    --green: ${({ theme }) => theme.colors.green};
    --teal: ${({ theme }) => theme.colors.teal};
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

  .grid {
    list-style: none
  }

  .grid__col--2-of-2,.grid__col--3-of-3,.grid__col--4-of-4,.grid__col--5-of-5,.grid__col--6-of-6,.grid__col--8-of-8,.grid__col--12-of-12 {
    width: 100%
  }

  .grid__col--1-of-2,.grid__col--2-of-4,.grid__col--3-of-6,.grid__col--4-of-8,.grid__col--6-of-12 {
    width: 50%
  }

  .grid__col--1-of-3,.grid__col--2-of-6,.grid__col--4-of-12 {
    width: 33.33333%
  }

  .grid__col--2-of-3,.grid__col--4-of-6,.grid__col--8-of-12 {
    width: 66.66667%
  }

  .grid__col--1-of-4,.grid__col--2-of-8,.grid__col--3-of-12 {
    width: 25%
  }

  .grid__col--3-of-4,.grid__col--6-of-8,.grid__col--9-of-12 {
    width: 75%
  }

  .grid__col--push-2-of-2,.grid__col--push-3-of-3,.grid__col--push-4-of-4,.grid__col--push-5-of-5,.grid__col--push-6-of-6,.grid__col--push-8-of-8,.grid__col--push-12-of-12 {
    margin-left: 100%
  }

  .grid__col--push-1-of-2,.grid__col--push-2-of-4,.grid__col--push-3-of-6,.grid__col--push-4-of-8,.grid__col--push-6-of-12 {
    margin-left: 50%
  }

  .grid__col--push-1-of-3,.grid__col--push-2-of-6,.grid__col--push-4-of-12 {
    margin-left: 33.33333%
  }

  .grid__col--push-2-of-3,.grid__col--push-4-of-6,.grid__col--push-8-of-12 {
    margin-left: 66.66667%
  }

  .grid__col--push-1-of-4,.grid__col--push-2-of-8,.grid__col--push-3-of-12 {
    margin-left: 25%
  }

  .grid__col--push-3-of-4,.grid__col--push-6-of-8,.grid__col--push-9-of-12 {
    margin-left: 75%
  }

  .grid__col--pull-2-of-2,.grid__col--pull-3-of-3,.grid__col--pull-4-of-4,.grid__col--pull-5-of-5,.grid__col--pull-6-of-6,.grid__col--pull-8-of-8,.grid__col--pull-12-of-12 {
    margin-left: -100%
  }

  .grid__col--pull-1-of-2,.grid__col--pull-2-of-4,.grid__col--pull-3-of-6,.grid__col--pull-4-of-8,.grid__col--pull-6-of-12 {
    margin-left: -50%
  }

  .grid__col--pull-1-of-3,.grid__col--pull-2-of-6,.grid__col--pull-4-of-12 {
    margin-left: -33.33333%
  }

  .grid__col--pull-2-of-3,.grid__col--pull-4-of-6,.grid__col--pull-8-of-12 {
    margin-left: -66.66667%
  }

  .grid__col--pull-1-of-4,.grid__col--pull-2-of-8,.grid__col--pull-3-of-12 {
    margin-left: -25%
  }

  .grid__col--pull-3-of-4,.grid__col--pull-6-of-8,.grid__col--pull-9-of-12 {
    margin-left: -75%
  }

  .grid {
    margin-left: -2.4rem
  }

  .grid__col--1-of-5 {
    width: 20%
  }

  .grid__col--push-1-of-5 {
    margin-left: 20%
  }

  .grid__col--pull-1-of-5 {
    margin-left: -20%
  }

  .grid__col--2-of-5 {
    width: 40%
  }

  .grid__col--push-2-of-5 {
    margin-left: 40%
  }

  .grid__col--pull-2-of-5 {
    margin-left: -40%
  }

  .grid__col--3-of-5 {
    width: 60%
  }

  .grid__col--push-3-of-5 {
    margin-left: 60%
  }

  .grid__col--pull-3-of-5 {
    margin-left: -60%
  }

  .grid__col--4-of-5 {
    width: 80%
  }

  .grid__col--push-4-of-5 {
    margin-left: 80%
  }

  .grid__col--pull-4-of-5 {
    margin-left: -80%
  }

  .grid__col--1-of-6 {
    width: 16.66667%
  }

  .grid__col--push-1-of-6 {
    margin-left: 16.66667%
  }

  .grid__col--pull-1-of-6 {
    margin-left: -16.66667%
  }

  .grid__col--5-of-6 {
    width: 83.33333%
  }

  .grid__col--push-5-of-6 {
    margin-left: 83.33333%
  }

  .grid__col--pull-5-of-6 {
    margin-left: -83.33333%
  }

  .grid__col--1-of-8 {
    width: 12.5%
  }

  .grid__col--push-1-of-8 {
    margin-left: 12.5%
  }

  .grid__col--pull-1-of-8 {
    margin-left: -12.5%
  }

  .grid__col--3-of-8 {
    width: 37.5%
  }

  .grid__col--push-3-of-8 {
    margin-left: 37.5%
  }

  .grid__col--pull-3-of-8 {
    margin-left: -37.5%
  }

  .grid__col--5-of-8 {
    width: 62.5%
  }

  .grid__col--push-5-of-8 {
    margin-left: 62.5%
  }

  .grid__col--pull-5-of-8 {
    margin-left: -62.5%
  }

  .grid__col--7-of-8 {
    width: 87.5%
  }

  .grid__col--push-7-of-8 {
    margin-left: 87.5%
  }

  .grid__col--pull-7-of-8 {
    margin-left: -87.5%
  }

  .grid__col--1-of-12 {
    width: 8.33333%
  }

  .grid__col--push-1-of-12 {
    margin-left: 8.33333%
  }

  .grid__col--pull-1-of-12 {
    margin-left: -8.33333%
  }

  .grid__col--2-of-12 {
    width: 16.66667%
  }

  .grid__col--push-2-of-12 {
    margin-left: 16.66667%
  }

  .grid__col--pull-2-of-12 {
    margin-left: -16.66667%
  }

  .grid__col--5-of-12 {
    width: 41.66667%
  }

  .grid__col--push-5-of-12 {
    margin-left: 41.66667%
  }

  .grid__col--pull-5-of-12 {
    margin-left: -41.66667%
  }

  .grid__col--7-of-12 {
    width: 58.33333%
  }

  .grid__col--push-7-of-12 {
    margin-left: 58.33333%
  }

  .grid__col--pull-7-of-12 {
    margin-left: -58.33333%
  }

  .grid__col--10-of-12 {
    width: 83.33333%
  }

  .grid__col--push-10-of-12 {
    margin-left: 83.33333%
  }

  .grid__col--pull-10-of-12 {
    margin-left: -83.33333%
  }

  .grid__col--11-of-12 {
    width: 91.66667%
  }

  .grid__col--push-11-of-12 {
    margin-left: 91.66667%
  }

  .grid__col--pull-11-of-12 {
    margin-left: -91.66667%
  }

  .grid__col {
    box-sizing: border-box;
    display: inline-block;
    margin-right: -.25em;
    min-height: 1px;
    padding-left: 2.4rem;
    vertical-align: top
  }

  @media (max-width: 700px) {
    .grid__col {
        display:block;
        margin-left: 0;
        margin-right: 0;
        width: auto
    }
  }

  @media (max-width: 700px) and (min-width:480px) {
    .grid__col[class*=grid__col--m-] {
        display:inline-block;
        margin-right: -.24em
    }

    .grid__col.grid__col--m-1-of-2,.grid__col.grid__col--m-2-of-4 {
        width: 50%
    }

    .grid__col.grid__col--m-1-of-3 {
        width: 33.33333%
    }

    .grid__col.grid__col--m-2-of-3 {
        width: 66.66667%
    }

    .grid__col.grid__col--m-1-of-4 {
        width: 25%
    }

    .grid__col.grid__col--m-3-of-4 {
        width: 75%
    }
  }

  @media (max-width: 480px) {
    .grid__col[class*=grid__col--s-] {
        display:inline-block;
        margin-right: -.24em
    }

    .grid__col.grid__col--s-1-of-2,.grid__col.grid__col--s-2-of-4 {
        width: 50%
    }

    .grid__col.grid__col--s-1-of-3 {
        width: 33.33333%
    }

    .grid__col.grid__col--s-2-of-3 {
        width: 66.66667%
    }

    .grid__col.grid__col--s-1-of-4 {
        width: 25%
    }

    .grid__col.grid__col--s-3-of-4 {
        width: 75%
    }
  }
  .grid__col--centered {
    display: block;
    margin-left: auto;
    margin-right: auto
}

.grid__col--d-first {
    float: left
}

.grid__col--d-last {
    float: right
}

.grid--no-gutter {
    margin-left: 0;
    width: 100%
}

.grid--no-gutter .grid__col {
    padding-left: 0
}

.grid--no-gutter .grid__col--span-all {
    margin-left: 0;
    width: 100%
}

.grid__col--ab {
    vertical-align: bottom
}

.grid__col--am {
    vertical-align: middle
}

`
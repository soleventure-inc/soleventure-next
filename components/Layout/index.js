import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from '@components/GlobalStyles'
import { theme } from '@components/Theme'

import Header from '../Header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <ThemeProvider theme={ theme }>
        <Normalize />
        <GlobalStyle/>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="Description" content={description}></meta>
          <title>{pageTitle}</title>
          <link rel="stylesheet" href="https://use.typekit.net/hrc4hjr.css"></link>
        </Head>
        <section>
          <Header />
          <div>{children}</div>
        </section>
        <footer>
          Built with <img src="/netliheart.svg" alt="Netlify Heart" /> for you
        </footer>
      </ThemeProvider>
    </>
  )
}

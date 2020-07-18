import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from '@components/GlobalStyles'
import { theme } from '@components/Theme'
import Footer from '@components/Footer'

import Header from '../Header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle/>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="Description" content={description}></meta>
          <title>{pageTitle}</title>
          <link rel="stylesheet" href="https://use.typekit.net/hrc4hjr.css"></link>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/images/meta/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/images/meta/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/images/meta/favicon-16x16.png"></link>
          <link rel="manifest" href="/static/images/meta/site.webmanifest"></link>
          <link rel="mask-icon" href="/static/images/meta/safari-pinned-tab.svg" color="#6c5ce7"></link>
          <meta name="msapplication-TileColor" content="#6c5ce7"></meta>
          <meta name="theme-color" content="#6c5ce7"></meta>
          <meta name="description" content={description}></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://soleventure.com/"></meta>
          <meta property="og:title" content={pageTitle}></meta>
          <meta property="og:description" content={description}></meta>
          <meta property="og:image" content="/static/images/meta/sm.png"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:url" content="https://soleventure.com/"></meta>
          <meta property="twitter:title" content={pageTitle}></meta>
          <meta property="twitter:description" content={description}></meta>
          <meta property="twitter:image" content="/static/images/meta/sm.png"></meta>
        </Head>
        <section>
          <Header />
          <div>{children}</div>
        </section>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { Container, Grid } from '@components/Grid'

import Layout from '@components/Layout'
import getSlugs from '@utils/getSlugs'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <>
      <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
        <article>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <h1>{frontmatter.title}</h1>
                {frontmatter.hero_image && (
                  <img
                    src={frontmatter.hero_image}
                    className="hero"
                    alt={frontmatter.title}
                  />
                )}
                <div>
                  <ReactMarkdown source={markdownBody} />
                </div>
              </div>
            </Grid>
          </Container>
        </article>
      </Layout>
    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    return getSlugs(context)
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  }
}

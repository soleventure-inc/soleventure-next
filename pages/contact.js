import Layout from '@components/Layout'
import { SectionContainer, Container, Grid } from '@components/Grid'
import HubspotForm from 'react-hubspot-form'


const Contact = ({ title, description, ...props }) => {

  return (
    <>
      <Layout pageTitle={`${title} | Contact`} description={description}>
        <SectionContainer>
          <Container>
            <Grid>
              <div className="grid__col grid__col--12-of-12 grid__col--centered">
                <div style={{ textAlign: 'center'}}>
                  <h1>Contact SoleVenture</h1>
                  <p className="lead">
                    Thank you for your interest in SoleVenture. We will reply to your inquiry as quickly as possible.
                  </p>
                </div>
              </div>
              <div className="grid__col grid__col--1-of-2 grid__col--centered">
                <HubspotForm
                  portalId='6775904'
                  formId='49b109e4-3e49-475b-9498-77d61fb20f1e'
                  onSubmit={() => console.log('Submit!')}
                  onReady={(form) => console.log('Form ready!')}
                  loading={<div>Loading...</div>}
                />
              </div>
            </Grid>
          </Container>
        </SectionContainer>
      </Layout>
    </>
  )
}

export default Contact

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
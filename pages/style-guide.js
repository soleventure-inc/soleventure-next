import Layout from '@components/Layout'
import { Container, Grid } from '@components/Grid'
import styled from 'styled-components'
import { Box } from '@components/Box'
import { Button, ButtonGhost } from '@components/Button'

const FullWidth = styled.div`
  padding-top: 88px;
  padding-bottom: ${({ theme }) => theme.space[7]};
  text-align: ${props => props.center ? 'center' : 'initial'};
  background: ${props => props.bg ? props.bg : 'transparent'};
  color: ${props => props.color ? props.color : 'inherit'};
`

const StyleGuide = ({ title, description, ...props }) => {

  const colors = {
    base: [
      {
        name: 'Base Dark',
        color: 'var(--baseDark)',
        type: 'light'
      }, {
        name: 'Base Medium',
        color: 'var(--baseMedium)',
        type: 'light'
      }, {
        name: 'Base Alt',
        color: 'var(--baseAlt)',
        type: 'dark'
      }, {
        name: 'Base Light',
        color: 'var(--baseLight)',
        type: 'dark'
      }, {
        name: 'Base Lightest',
        color: 'var(--baseLightest)',
        type: 'dark'
      }
    ],
    primary: [
      {
        name: 'Primary',
        color: 'var(--primary)',
        type: 'light'
      }, {
        name: 'Primary Dark',
        color: 'var(--primaryDark)',
        type: 'light'
      }
    ],
    secondary: [
      {
        name: 'Beige',
        color: 'var(--beige)',
        type: 'dark'
      }, {
        name: 'Beige Dark',
        color: 'var(--beigeDark)',
        type: 'light'
      }, {
        name: 'Red',
        color: 'var(--red)',
        type: 'light'
      }, {
        name: 'Orange',
        color: 'var(--orange)',
        type: 'light'
      }, {
        name: 'Pink',
        color: 'var(--pink)',
        type: 'dark'
      }, {
        name: 'Green',
        color: 'var(--green)',
        type: 'light'
      }, {
        name: 'Teal',
        color: 'var(--teal)',
        type: 'dark'
      }
    ]
  }

  return (
    <>
      <Layout pageTitle={`${title} | Contact`} description={description}>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <Box
                  bg={'var(--beige)'}
                  color={'var(--beigeDark)'}
                >
                  <h1>Style Guide</h1>
                  <p className="lead">Colors, typography, customer logos and more. Here’s how you use it all.</p>
                </Box>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <hr/>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <h4>Logos</h4>
                <p>The logomark was optimized to be bolder and sleeker - opting to use a a heavier weight in the icon juxtapozed on top of the new primary brand color, blue. To help readability at all device/print sizes, the tagline was removed. The simpler logo should serve to be more instantly recognizable and readable.</p>
              </div>
              <div className="grid__col grid__col--1-of-3 grid__col--centered">
                <div style={{ textAlign:'center'}}>
                  <img
                    src="/static/soleVenture-logos/SV-logos/sv_logo-full-color.svg"
                    style={{
                      display: 'block',
                      width:'100%'
                    }}
                  />
                  <span>Full Color Logo</span>
                </div>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <hr/>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <h4>Describing SoleVenture</h4>
                <Box
                  bg={'var(--baseLightest)'}
                  color={'var(--baseDark)'}
                  marginBottom={'24px'}
                >
                  <div style={{ color: 'var(--primary)', marginBottom: '16px'}}>
                    <strong>Mission</strong>
                  </div>
                  <p style={{ marginBottom: '0'}}>SoleVenture’s mission is to foster innovation and entrepreneurship in a changing workforce by giving small business owners and the gig economy the security of steady income and traditional benefits.</p>
                </Box>
                <Box
                  bg={'var(--baseLightest)'}
                  color={'var(--baseDark)'}
                  marginBottom={'24px'}
                >
                  <div style={{ color: 'var(--primary)', marginBottom: '16px'}}>
                    <strong>About</strong>
                  </div>
                  <p style={{ marginBottom: '0'}}>A platform for freelancers seeking to join a leading network, gain new clients, and access portable health insurance and traditional benefits.</p>
                </Box>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <hr/>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <h4>Colors</h4>
                <p>A new color palette was chosen to help solidify the brand values.</p>
                <p>To help build a foundation for the UI, colors were split into 3 utilities:</p>
                <ul>
                  <li>Base</li>
                  <li>Primary</li>
                  <li>Secondary</li>
                </ul>
                <h5>Base</h5>
                <p>Base colors should be used for neutral elements and help shape the foundation of the interface.</p>
                <Grid>
                  {
                    colors.base.map(color => (
                      <div className="grid__col grid__col--1-of-3 grid__col--m-1-of-2 grid__col--s-1-of-2">
                        <Box
                          bg={color.color}
                          color={color.type === 'dark' ? 'var(--baseDark)' : 'var(--white)'}
                          center
                          marginBottom={'16px'}
                        >
                          {color.name}
                        </Box>
                      </div>
                    ))
                  }
                </Grid>
                <p>Primary and Secondary colors help express intent and state and should be used when an element should convey or point to an action.</p>
                <h5>Primary</h5>
                <Grid>
                  {
                    colors.primary.map(color => (
                      <div className="grid__col grid__col--1-of-3 grid__col--m-1-of-2 grid__col--s-1-of-2">
                        <Box
                          bg={color.color}
                          color={color.type === 'dark' ? 'var(--baseDark)' : 'var(--white)'}
                          center
                          marginBottom={'16px'}
                        >
                          {color.name}
                        </Box>
                      </div>
                    ))
                  }
                </Grid>
                <h5>Secondary</h5>
                <Grid>
                  {
                    colors.secondary.map(color => (
                      <div className="grid__col grid__col--1-of-3 grid__col--m-1-of-2 grid__col--s-1-of-2">
                        <Box
                          bg={color.color}
                          color={color.type === 'dark' ? 'var(--baseDark)' : 'var(--white)'}
                          center
                          marginBottom={'16px'}
                        >
                          {color.name}
                        </Box>
                      </div>
                    ))
                  }
                </Grid>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <hr/>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <h4>Typography</h4>
                <p>New typefaces were chosen to help create a sharper contrast between text elements.</p>
                <p>The large serif headers help convey a sense of stability to users, while the swiss-inspired geometric sans in the body help make the interface feel modern, yet usable.</p>
                <Grid>
                  <div className="grid__col grid__col--1-of-2">
                    <h5>Titles - <span style={{ color: 'var(--primary)' }}>Ibarra Real Nova</span></h5>
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <h3>Header 3</h3>
                    <h4>Header 4</h4>
                    <h5>Header 5</h5>
                    <h6>Header 6</h6>
                  </div>
                  <div className="grid__col grid__col--1-of-2">
                    <h5>Body/Main Text - <span style={{ color: 'var(--primary)' }}>Proxima Nova</span></h5>
                    <p className="lead">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus at arcu nec congue.
                    </p>
                    <p>
                      Fusce risus lacus, <strong>commodo</strong> sit amet eros vitae, gravida dapibus tortor. Praesent sed elementum justo. Nunc non <i>vulputate</i> ipsum, vel elementum tortor. Nunc sed volutpat tortor, at semper erat. Ut vel justo sem. Pellentesque a aliquam mauris. Morbi ligula leo, ultrices iaculis mattis quis, eleifend fringilla odio.
                    </p>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <hr/>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <h4>Example Images</h4>
                <Grid>
                  <div className="grid__col grid__col--1-of-2">
                    <img
                      src="/static/images/bg-1.png"
                      style={{
                        display: 'block',
                        width: '100%',
                        borderRadius: '8px',
                        marginBottom: '16px'
                      }}
                    />
                  </div>
                  <div className="grid__col grid__col--1-of-2">
                    <img
                      src="/static/images/bg-2.png"
                      style={{
                        display: 'block',
                        width: '100%',
                        borderRadius: '8px',
                        marginBottom: '16px'
                      }}
                    />
                  </div>
                  <div className="grid__col grid__col--1-of-2">
                    <img
                      src="/static/images/bg-3.png"
                      style={{
                        display: 'block',
                        width: '100%',
                        borderRadius: '8px',
                        marginBottom: '16px'
                      }}
                    />
                  </div>
                  <div className="grid__col grid__col--1-of-2">
                    <img
                      src="/static/images/bg-4.png"
                      style={{
                        display: 'block',
                        width: '100%',
                        borderRadius: '8px',
                        marginBottom: '16px'
                      }}
                    />
                  </div>
                </Grid>
              </div>
            </Grid>
          </Container>
        </FullWidth>
        <hr/>
        <FullWidth>
          <Container>
            <Grid>
              <div className="grid__col grid__col--2-of-3 grid__col--centered">
                <h4>Buttons</h4>
                <h5>Default Buttons</h5>
                <div>
                  {
                    colors.base.map(color => (
                      <Button
                        bg={color.color}
                        color={color.type === 'dark' ? 'var(--baseDark)' : 'var(--white)'}
                        marginBottom={'16px'}
                        marginLeft={'8px'}
                      >
                        {color.name}
                      </Button>
                    ))
                  }
                  {
                    colors.primary.map(color => (
                      <Button
                        bg={color.color}
                        color={color.type === 'dark' ? 'var(--baseDark)' : 'var(--white)'}
                        marginBottom={'16px'}
                        marginLeft={'8px'}
                      >
                        {color.name}
                      </Button>
                    ))
                  }
                  {
                    colors.secondary.map(color => (
                      <Button
                        bg={color.color}
                        color={color.type === 'dark' ? 'var(--baseDark)' : 'var(--white)'}
                        marginBottom={'16px'}
                        marginLeft={'8px'}
                      >
                        {color.name}
                      </Button>
                    ))
                  }
                </div>
                <h5>Ghost Buttons</h5>
                <div>
                  {
                    colors.base.map(color => (
                      <ButtonGhost
                        color={color.color}
                        marginBottom={'16px'}
                        marginLeft={'8px'}
                      >
                        {color.name}
                      </ButtonGhost>
                    ))
                  }
                  {
                    colors.primary.map(color => (
                      <ButtonGhost
                        color={color.color}
                        marginBottom={'16px'}
                        marginLeft={'8px'}
                      >
                        {color.name}
                      </ButtonGhost>
                    ))
                  }
                  {
                    colors.secondary.map(color => (
                      <ButtonGhost
                        color={color.color}
                        marginBottom={'16px'}
                        marginLeft={'8px'}
                      >
                        {color.name}
                      </ButtonGhost>
                    ))
                  }
                </div>
              </div>
            </Grid>
          </Container>
        </FullWidth>
      </Layout>
    </>
  )
}

export default StyleGuide

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
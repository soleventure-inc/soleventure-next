const { default: Layout } = require('@components/Layout');
import { Grid, Container } from '@components/Grid';
import styled from 'styled-components';

const FullWidth = styled.div`
  padding-top: 88px;
  padding-bottom: ${({ theme }) => theme.space[7]};
  text-align: ${(props) => (props.center ? 'center' : 'initial')};
  background: ${(props) => (props.bg ? props.bg : 'transparent')};
  color: ${(props) => (props.color ? props.color : 'inherit')};
`;

const LifeInsurance = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | PolicyGenius`} description={description}>
        <FullWidth bg={'var(--baseDark)'} color={'var(--white)'}>
          <Container>
            <Grid>
              <div className="grid__col grid__col--1-of-2">
                <h2 style={{ marginTop: '80px' }}>
                Life Insurance
                </h2>
                <p className="lead">
                  Life insurance coverage provides financial security for you and your loved ones.
                </p>
              </div>
              <div className="grid__col grid__col--1-of-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<div id="policygenius-price-calculator" data-offer-id="335" data-aff-id="1819" data-sub-id="organic"></div>
                             <script src="https://www.policygenius.com/price-calculator/calculator.js" type="text/javascript"></script>`,
                  }}
                  style={{ marginTop: '25px' }}
                ></div>
              </div>
            </Grid>
          </Container>
        </FullWidth>
      </Layout>
    </>
  );
};

export default LifeInsurance;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}

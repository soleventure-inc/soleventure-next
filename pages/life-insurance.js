const { default: Layout } = require('@components/Layout');
import { useEffect } from 'react';
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
  let isBrowser;

  useEffect(() => {
    isBrowser = () => {
      return typeof window !== 'undefined';
    };

    if (isBrowser) {
      const policyGeniusURL =
        'https://www.policygenius.com/price-calculator/calculator.js';

      let policyGeniusScript = document.createElement('script');
      
      policyGeniusScript.type = 'text/javascript';
      policyGeniusScript.src = policyGeniusURL;
      try {
        policyGeniusScript.appendChild(document.createTextNode(code));
        document.body.appendChild(s);
      } catch (e) {
        policyGeniusScript.text = policyGeniusURL;
        document.body.appendChild(policyGeniusScript);
      }
    }
  });

  return (
    <>
      <Layout pageTitle={`${title} | Life Insurance`} description={description}>
        <FullWidth bg={'var(--baseDark)'} color={'var(--white)'}>
          <Container>
            <Grid>
              <div className="grid__col grid__col--1-of-2">
                <h2 style={{ marginTop: '80px' }}>Life Insurance</h2>
                <p className="lead">
                  Life insurance gives you peace of mind and protects the people
                  you love.
                </p>
                <p>
                  Shop plans with top insurers and save up to 50%.
                  <br />
                  Immediate access to licensed experts to find the best plan.
                </p>
              </div>
              <div className="grid__col grid__col--1-of-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<div id="policygenius-price-calculator" data-offer-id="335" data-aff-id="1819" data-sub-id="organic"></div>`,
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

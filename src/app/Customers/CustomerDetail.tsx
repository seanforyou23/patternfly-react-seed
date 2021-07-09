import * as React from 'react';
import {
  PageSection,
  Card,
  CardBody,
  CardTitle,
  Grid,
  GridItem,
  BackgroundImage,
  Title
} from '@patternfly/react-core';

export interface ICustomerDetailProps {
  sampleProp?: string;
}

let CustomerDetail: React.FunctionComponent<ICustomerDetailProps> = (props) => {

  const [userData, setUserData] = React.useState<any>();

  // @ts-ignore
  const getUserData = () => fetch(`https://reqres.in/api/users/${props.computedMatch.params.id}`)

  React.useEffect(() => {
    getUserData().then((result) => result.json()).then(data => setUserData(data.data));
  }, []);

  return (
    <PageSection>
      {userData && <Title className="pf-u-mb-sm" headingLevel="h1">Details for customer resource "{userData.first_name}"</Title>}
      {userData && (
        <Grid>
          <GridItem rowSpan={6} smRowSpan={12}>
          <Card isFlat>
            <Grid className="pf-m-all-6-col-on-md">
              <GridItem className="pf-d-card__media-item">
                <BackgroundImage style={{
                  minHeight: '200px',
                  background: `center / cover url('${userData.avatar}')`
                }} src={userData.avatar} />
              </GridItem>
              <GridItem>
                <CardTitle>
                  <Title headingLevel="h2">{userData.first_name} {userData.last_name}</Title>
                </CardTitle>
                <CardBody>{userData.email}</CardBody>
              </GridItem>
            </Grid>
          </Card>
          </GridItem>
        </Grid>
      )}
    </PageSection>
  )
}

export { CustomerDetail };

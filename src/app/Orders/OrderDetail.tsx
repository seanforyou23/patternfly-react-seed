import * as React from 'react';
import {
  PageSection,
  Card,
  CardBody,
  CardTitle,
  Grid,
  GridItem,
  BackgroundImage,
  Title,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription
} from '@patternfly/react-core';
import { DollarSignIcon } from '@patternfly/react-icons';

export interface IOrderDetailProps {
  sampleProp?: string;
}

let OrderDetail: React.FunctionComponent<IOrderDetailProps> = (props) => {

  const [orderData, setOrderData] = React.useState<any>();

  // @ts-ignore
  const getOrderData = () => fetch(`https://fakestoreapi.com/products/${props.computedMatch.params.id}`);

  React.useEffect(() => {
    getOrderData().then((result) => result.json()).then(data => setOrderData(data));
  }, []);

  return (
    <PageSection>
      {orderData && <Title className="pf-u-mb-sm" headingLevel="h1">Details for order resource "{orderData.title}"</Title>}
      {orderData && (
        <Grid>
          <GridItem rowSpan={6} smRowSpan={12}>
            <Card isFlat style={{ padding: '20px' }}>
              <Grid className="pf-m-all-6-col-on-md">
                <GridItem className="pf-d-card__media-item">
                  <BackgroundImage style={{
                    minHeight: '200px',
                    background: `center / contain url('${orderData.image}') no-repeat`
                  }} src={orderData.image} />
                </GridItem>
                <GridItem>
                  <CardTitle>
                    <Title headingLevel="h2">{orderData.title}</Title>
                  </CardTitle>
                  <CardBody>
                    <DescriptionList>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Price</DescriptionListTerm>
                        <DescriptionListDescription><DollarSignIcon />{orderData.price}</DescriptionListDescription>
                      </DescriptionListGroup>
                      <DescriptionListGroup>
                        <DescriptionListTerm>Description</DescriptionListTerm>
                        <DescriptionListDescription>
                          {orderData.description}
                        </DescriptionListDescription>
                      </DescriptionListGroup>
                    </DescriptionList>
                  </CardBody>
                </GridItem>
              </Grid>
            </Card>
          </GridItem>
        </Grid>
      )}
    </PageSection>
  )
}

export { OrderDetail };

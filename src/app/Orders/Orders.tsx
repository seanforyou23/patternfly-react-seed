import * as React from 'react';
import {
  Button,
  Avatar,
  PageSection,
  Card,
  CardHeader,
  CardBody,
  CardActions,
  CardHeaderMain,
  CardTitle,
  Gallery,
  GalleryItem,
  Label,
  Title,
  TextContent
} from '@patternfly/react-core';
import { useHistory } from 'react-router-dom';
import { InfoAltIcon, UserAltIcon } from '@patternfly/react-icons'; '@patternfly/react-icons';
import '@app/Orders/Orders.css';

const Orders: React.FunctionComponent = () => {
  const isMounted = React.useRef(true)
  const [hasData, setHasData] = React.useState<any>();

  const history = useHistory();

  const getOrders = () => fetch('https://fakestoreapi.com/products');

  React.useEffect(() => {
    getOrders().then((result) => result.json()).then(data => {
      setHasData(data);
    })
  }, []);

  return (
    <PageSection>
      <TextContent>
        <Title headingLevel="h1" className="pf-u-mb-sm">Orders resource list</Title>
      </TextContent>
      {hasData && <Gallery hasGutter>{
        (hasData.map((data, idx) => {
          return (
            <GalleryItem key={idx}>
              <Card>
                <CardHeader>
                  <CardHeaderMain>
                    <Avatar alt={`${data.category} product image`} src={data.image} />
                  </CardHeaderMain>
                  <CardActions>
                    <Button onClick={() => {
                      history.push(`/orders/detail/${data.id}`);
                    }} variant="link" icon={<InfoAltIcon />}>
                      See details
                    </Button>
                  </CardActions>
                </CardHeader>
                <CardTitle className="productTitle">
                  <Title size="md" headingLevel="h2">{data.title}</Title>
                </CardTitle>
                <CardBody>
                  <Label icon={<UserAltIcon />} variant="outline">ID: {data.id}</Label>
                </CardBody>
              </Card>
            </GalleryItem>
          )
        }))}
      </Gallery>
      }

    </PageSection>
  )
}

export { Orders };

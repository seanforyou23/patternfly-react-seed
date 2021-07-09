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

const Customers: React.FunctionComponent = () => {
  const [hasData, setHasData] = React.useState<any>([]);

  const history = useHistory();

  const getContributors = () => fetch('https://reqres.in/api/users');

  React.useEffect(() => {
    getContributors().then((result) => result.json()).then(data => {
      setHasData(data.data);
    })
  }, []);

  return (
    <PageSection>
      <TextContent>
        <Title headingLevel="h1" className="pf-u-mb-sm">Customer resource list</Title>
      </TextContent>
      {hasData !== [] && <Gallery hasGutter>{
        (hasData.map((data, idx) => {
          return (
            <GalleryItem key={idx}>
              <Card>
                <CardHeader>
                  <CardHeaderMain>
                    <Avatar alt="avatar" src={data.avatar} />
                  </CardHeaderMain>
                  <CardActions>
                    <Button onClick={() => {
                      history.push(`/customers/detail/${data.id}`);
                    }} variant="link" icon={<InfoAltIcon />}>
                      See details
                    </Button>
                  </CardActions>
                </CardHeader>
                <CardTitle>
                  <Title size="md" headingLevel="h2">{data.first_name} {data.last_name}</Title>
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

export { Customers };

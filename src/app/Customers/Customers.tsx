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

  const getContributors = () => fetch('/customers');

  React.useEffect(() => {
    getContributors().then((result) => {
      console.log('result?', result);
      return result.json();
    }).then(data => {
      console.log('data?', data);
      alert('got data!');
      // setHasData(data);
      return data;
    })
    .catch(error => {
      console.log('there was an error!', error);
    })
  }, []);

  // React.useEffect(() => {
  //   console.log('hasData', hasData);
  // }, [hasData]);

  const getUsers = () => fetch('/users');

  React.useEffect(() => {
    getUsers().then((result) => {
      console.log('result?', result);
      return result.json();
    }).then(data => {
      console.log('data?', data);
      alert('got data!');
      // setHasData(data);
      return data;
    })
    .catch(error => {
      console.log('there was an error!', error);
    })
  }, []);

  return (
    <PageSection>
      <TextContent>
        <Title headingLevel="h1" className="pf-u-mb-sm">Customer resource list</Title>
      </TextContent>
      {/* {hasData !== [] && <Gallery hasGutter>{
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
      } */}

    </PageSection>
  )
}

export { Customers };

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
import crops from '@app/Crops/crops.json';

const Crops: React.FunctionComponent = () => {
  const [cropData, setCropData] = React.useState<any>([]);

  const history = useHistory();
  let timer;

  const getCrops = () => {

    return new Promise((res) => {
      timer = setTimeout(() => {
        res(crops)
      }, 1000);
    });

    // cors issue, need api key
    // fetch('https://www.growstuff.org/crops.json', {
    //   mode: 'no-cors',
    // })
  };

  React.useEffect(() => {
    // need to filter our crops with id 295, 595, 370, 710, 676, 304, 31
    getCrops().then(result => setCropData(result));

    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <PageSection>
      <TextContent>
        <Title headingLevel="h1" className="pf-u-mb-sm">Crops resource list</Title>
      </TextContent>
      {cropData !== [] && <Gallery hasGutter>{
        (cropData.map((data, idx) => {
          return (
            <GalleryItem key={idx}>
              <Card>
                <CardHeader>
                  <CardHeaderMain>
                    <Avatar alt="avatar" src={data.thumbnail_url} />
                  </CardHeaderMain>
                  <CardActions>
                    <Button onClick={() => {
                      history.push(`/crops/detail/${data.id}`);
                    }} variant="link" icon={<InfoAltIcon />}>
                      See details
                    </Button>
                  </CardActions>
                </CardHeader>
                <CardTitle>
                  <Title size="md" headingLevel="h2">{data.name}</Title>
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

export { Crops };

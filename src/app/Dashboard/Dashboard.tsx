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
import { useQuery } from 'react-query';

type usersResponse = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

type withoutEmail = {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Dashboard: React.FunctionComponent = () => {
  const [hasData, setHasData] = React.useState<any>([]);

  const history = useHistory();

  const getContributors = (): Promise<usersResponse[]> => {
    return fetch('https://reqres.in/api/users')
      .then((result) => result.json())
      .then((data) => data.data)
  }

  const useContributors = () => {
    return useQuery<usersResponse[], unknown, withoutEmail[]>({
      queryKey: 'users',
      queryFn: getContributors,
      select: (tmpData) => {
        const foo = tmpData.map(el => {
          const { email, ...rest } = el;
          return rest;
        });
        return foo;
      }
    })
  }

  const { data, isLoading, error } = useContributors();
  // console.log(data);

  // React.useEffect(() => {
  //   // getContributors().then((result) => result.json()).then(data => {
  //   //   setHasData(data.data);
  //   // })

  // }, []);

  React.useEffect(() => {
    // getContributors().then((result) => result.json()).then(data => {
    //   setHasData(data.data);
    // })
    console.log(data);

  }, [data]);

  if (isLoading) return <div>loading</div>
  if (error) return <div>ERROR</div>

  return (
    <PageSection>
      <TextContent>
        <Title headingLevel="h1" className="pf-u-mb-sm">Users</Title>
      </TextContent>
      {data && <Gallery hasGutter>{
        (data.map((data, idx) => {
          return (
            <GalleryItem key={idx}>
              <Card>
                <CardHeader>
                  <CardHeaderMain>
                    <Avatar alt="avatar" src={data.avatar} />
                  </CardHeaderMain>
                  <CardActions>
                    <Button onClick={() => {
                      history.push(`/detail/${data.id}`);
                    }} variant="link" icon={<InfoAltIcon />}>
                      See details
                    </Button>
                  </CardActions>
                </CardHeader>
                <CardTitle>
                  <Title headingLevel="h2">{data.first_name} {data.last_name}</Title>
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

export { Dashboard };

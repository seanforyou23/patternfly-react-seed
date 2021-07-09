import * as React from 'react';
import {
  Button,
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
import { WikipediaWIcon } from '@patternfly/react-icons';
import crops from '@app/Crops/crops.json';
import cropsDetails from '@app/Crops/cropDetails.json';
import { useHistory } from 'react-router-dom';
export interface ICropDetailProps {
  sampleProp?: string;
}

let CropDetail: React.FunctionComponent<ICropDetailProps> = (props) => {
  const history = useHistory();
  const [cropData, setCropData] = React.useState<any>();
  let timer;

  // @ts-ignore
  const getCropData = () => {

    return new Promise((res) => {
      timer = setTimeout(() => {
        res(crops)
      }, 1000);
    });


    // TODO: get an api key for this
    // fetch(`https://www.growstuff.org/crops/${props.computedMatch.params.slug}.json`
  }

  React.useEffect(() => {
    getCropData().then(allCropData => {
      // @ts-ignore
      let generalData = allCropData.find(crop => crop.id === props.computedMatch.params.slug);
      // @ts-ignore
      let specificData = cropsDetails.find(crop => crop.id.toString() === props.computedMatch.params.slug);;
      let fullData = {
        ...generalData,
        ...specificData,
      }
      setCropData(fullData)
    });

    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <PageSection>
      {cropData && <Title className="pf-u-mb-sm" headingLevel="h1">Details for crop resource "{cropData.name}"</Title>}
      {cropData && (
        <Grid>
          <GridItem rowSpan={6} smRowSpan={12}>
            <Card isFlat>
              <Grid className="pf-m-all-5-col-on-md">
                <GridItem className="pf-d-card__media-item">
                  <BackgroundImage style={{
                    height: '100%',
                    background: `center / cover url('${cropData.thumbnail_url}')`
                  }} src={cropData.avatar} />
                </GridItem>
                <GridItem>
                  <CardBody>
                    <DescriptionList
                      columnModifier={{
                        default: '2Col'
                      }}
                    >
                      <DescriptionListGroup>
                        <DescriptionListTerm>Name</DescriptionListTerm>
                        <DescriptionListDescription>
                          {cropData.en_wikipedia_url ? (
                            <Button icon={<WikipediaWIcon />} variant="secondary" onClick={() => {
                              window.open(cropData.en_wikipedia_url, '_blank')
                            }}>{cropData.name}</Button>
                          ) : cropData.name}
                        </DescriptionListDescription>
                      </DescriptionListGroup>

                      {cropData.scientific_name && (
                        <DescriptionListGroup>
                          <DescriptionListTerm>Scientific Name</DescriptionListTerm>
                          <DescriptionListDescription>
                            {cropData.scientific_name}
                          </DescriptionListDescription>
                        </DescriptionListGroup>
                      )}

                      {cropData.median_days_to_first_harvest &&
                        cropData.median_days_to_last_harvest && (
                          <DescriptionListGroup>
                            <DescriptionListTerm>Median days to first/last harvest</DescriptionListTerm>
                            <DescriptionListDescription>{cropData.median_days_to_first_harvest}/{cropData.median_days_to_last_harvest}</DescriptionListDescription>
                          </DescriptionListGroup>
                        )}

                      {cropData.harvests_count && (
                        <DescriptionListGroup>
                          <DescriptionListTerm>Harvest count</DescriptionListTerm>
                          <DescriptionListDescription>{cropData.harvests_count}</DescriptionListDescription>
                        </DescriptionListGroup>
                      )}

                      {cropData.description && (
                        <DescriptionListGroup>
                          <DescriptionListTerm>Description</DescriptionListTerm>
                          <DescriptionListDescription>{cropData.description}</DescriptionListDescription>
                        </DescriptionListGroup>
                      )}

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

export { CropDetail };

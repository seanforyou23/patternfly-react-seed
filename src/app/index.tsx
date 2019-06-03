import React, { Component } from 'react';
import {
  Alert,
  AlertActionCloseButton,
  BackgroundImage,
  BackgroundImageSrc,
  Page,
  PageHeader,
  PageSidebar,
  PageSection,
  PageSectionVariants
} from '@patternfly/react-core';
import '@app/app.css';
import '@pf3/dist/css/patternfly-react.css';
import xs from '@assets/images/pfbg_576.jpg';
import xs2x from '@assets/images/pfbg_576@2x.jpg';
import sm from '@assets/images/pfbg_768.jpg';
import sm2x from '@assets/images/pfbg_768@2x.jpg';
import lg from '@assets/images/pfbg_1200.jpg';
import filter from '@assets/images/background-filter.svg';

const images = {
  [BackgroundImageSrc.xs]: xs,
  [BackgroundImageSrc.xs2x]: xs2x,
  [BackgroundImageSrc.sm]: sm,
  [BackgroundImageSrc.sm2x]: sm2x,
  [BackgroundImageSrc.lg]: lg,
  [BackgroundImageSrc.filter]: `${filter}#image_overlay`
};

export interface AppState {
  isNavOpen: boolean;
  isShowing: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.onNavToggle = this.onNavToggle.bind(this);
    this.dismissNotification = this.dismissNotification.bind(this);
  }
  public state = {
    isShowing: true,
    isNavOpen: true
  };
  public onNavToggle() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  public render() {
    const { isShowing, isNavOpen } = this.state;
    const logoProps = {
      href: 'https://patternfly.org',
      target: '_blank'
    };
    const Header = (
      <PageHeader
        logo="Logo"
        logoProps={logoProps}
        toolbar="Toolbar"
        avatar=" | Avatar"
        showNavToggle
        isNavOpen={isNavOpen}
        onNavToggle={this.onNavToggle}
      />
    );
    const Sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} />;

    return (
      <React.Fragment>
        {/* <BackgroundImage src={images} /> */}
        <Page header={Header} sidebar={Sidebar}>
          <PageSection variant={PageSectionVariants.dark}>
          {isShowing && (
            <div className="notification-container">
              <Alert
                variant="success"
                title="Setup Complete"
                action={<AlertActionCloseButton onClose={this.dismissNotification} />}
              >
                You have successfully launched your patternfly starter project.
              </Alert>
            </div>
          )}
          {!isShowing && (
            <div>
              Section with dark background
            </div>
          )}
          </PageSection>
          <PageSection variant={PageSectionVariants.light}>Stub Patternfly Section</PageSection>
        </Page>
      </React.Fragment>
    );
  }
  private dismissNotification = () => {
    this.setState({ isShowing: false });
  };
}

export { App };

import React from 'react';
import {
  Avatar,
  BackgroundImage,
  BackgroundImageSrc,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import { global_breakpoint_md as breakpointMd } from '@patternfly/react-tokens';
import accessibleStyles from '@patternfly/patternfly-next/utilities/Accessibility/accessibility.css';
import spacingStyles from '@patternfly/patternfly-next/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
const brandImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAALCAYAAADx/yZ6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPlSURBVFiF5ZhdiFVVFMd/y5qkLxmbIhRBdCoherDCIIYQNArrIaxGafp8cKSCPl4iJu0lferjoSLMHioqDK0MgoJ5KCyKxFQKIwuaTKiYdNBRcsy8M38fzjq15865c/fZZ8ZB+sPm7rX2Wv+99rnrrL33QcU4IqlX0iJKQNIm9/9JkkX6tDSIIcRrTTgujuB4LiKWx5pwLIvguLqB75CkHZLuiHkuznXUfR+s088PeNsieGY3Wde6CI7NbvtsbPzut879BiRdUjd2qaRDPr4GYFoDnhnATcA2SZdHTtwGLHfxCuCGMoH/D3AusAh4X9LtJX1fkLRgEmI6HVgP7AXagPpkfhGYCXwPZAUjeEv+rYaS5kra4/qXY2aV9Ljbj/jv27ERS5oetO/c/6FAd3ZJjn3O0RXozorgyCvkl7GxF3DkFbK/Tj9H0nYf+zCSK6+QkrRL0jmur1IhZyeuK6lCuu/iIC9udN0yl4cldeS2hRXSzPYDn7g4J3Lebv9dD9SAOyVdFONoZifyBsjVtUBfK8mRI+QYjlzHpMDMfgM+czH2meaoAdcAT09oUKcJZvY58IaLG/wleiWXzeyr3DasPBdKmun9y4C7vL+z2YSe4VcCf5GV3uuAm4F7gJcS1zGVWCBpi/drZtaVwNEi6dpAbgXyrXpvSa7XgdVAj6Re4I+EeHJslHTc+x+Y2eYKXGXwBHArWW7tAuYCvwNPjbLS+Ngt6YJmM0l60+03unyvy3vKRi3pW/ftbm7dkGOfc6wo6Vd0qTnR3HMUR6NLTY4DktojufIte4mkd73/i6SFAV+VS80zJdaVvGUHHF118y+vtwkr5KfAIe8fJcvit8zsWJNJWoFOFw9K6nReAVdJut7Mvk5dxBShj/8O4COJHMPAfu/PIrvU/AgsNbOUCvcw0AHMIzsWpeJJYND7uyvwlIaZbZK0GlgM9JrZmLN0mJA9ZvZNwjx3A+d5f03B+CrgTEvIfjMb91NTBAbMrB1A0iNkR5d2YHoKmZkdlnQfWeG4pUJc7yS+EBOFPrKE7CsabPTZpwxW+e9O4L2gfeT6lZJmTMA8ZzJeBX4GWoCeVBIz2wY8D0R9450ktCq75Ydt3kSRV0pIZZ+KFpJta51mtiJot5FtCecDKZeCqURHgzPX1hQyMzsJrHXxAUnzK8S2FthRwb8qusmqW9hK3xUaYRrwA/AxMJDgvxI4DGw1s18Lxjf4eGfBWCMcBPqBoYR4chxwjuPNDOvwN1m8YRsc12Msht3vSJ1+C/AF2ZeIRyO5Bp3rZK7w5L4f+NPHVOw6CiNu+0/kvEU4xthnk/KMhtyn8P89BXZ27HtWql3DAAAAAElFTkSuQmCC';
const avatarImg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNiAzNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CgkvKnN0eWxlbGludC1kaXNhYmxlKi8KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsdGVyOnVybCgjYik7fQoJLnN0MnttYXNrOnVybCgjYSk7fQoJLnN0M3tmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNCQkJCQkI7fQoJLnN0NHtvcGFjaXR5OjAuMTtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDV7b3BhY2l0eTo4LjAwMDAwMGUtMDI7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMjMxRjIwO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLypzdHlsZWxpbnQtZW5hYmxlKi8KPC9zdHlsZT4KCQkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTgiIGN5PSIxOC41IiByPSIxOCIvPgoJCTxkZWZzPgoJCQk8ZmlsdGVyIGlkPSJiIiB4PSI1LjIiIHk9IjcuMiIgd2lkdGg9IjI1LjYiIGhlaWdodD0iNTMuNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMSAwIi8+CgkJCTwvZmlsdGVyPgoJCTwvZGVmcz4KCQk8bWFzayBpZD0iYSIgeD0iNS4yIiB5PSI3LjIiIHdpZHRoPSIyNS42IiBoZWlnaHQ9IjUzLjYiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQk8ZyBjbGFzcz0ic3QxIj4KCQkJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE4IiBjeT0iMTguNSIgcj0iMTgiLz4KCQkJPC9nPgoJCTwvbWFzaz4KCQk8ZyBjbGFzcz0ic3QyIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wNCA2Ljg4KSI+CgkJCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJtMjIuNiAxOC4xYy0xLjEtMS40LTIuMy0yLjItMy41LTIuNnMtMS44LTAuNi02LjMtMC42LTYuMSAwLjctNi4xIDAuNyAwIDAgMCAwYy0xLjIgMC40LTIuNCAxLjItMy40IDIuNi0yLjMgMi44LTMuMiAxMi4zLTMuMiAxNC44IDAgMy4yIDAuNCAxMi4zIDAuNiAxNS40IDAgMC0wLjQgNS41IDQgNS41bC0wLjMtNi4zLTAuNC0zLjUgMC4yLTAuOWMwLjkgMC40IDMuNiAxLjIgOC42IDEuMiA1LjMgMCA4LTAuOSA4LjgtMS4zbDAuMiAxLTAuMiAzLjYtMC4zIDYuM2MzIDAuMSAzLjctMyAzLjgtNC40czAuNi0xMi42IDAuNi0xNi41YzAuMS0yLjYtMC44LTEyLjEtMy4xLTE1eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTIyLjUgMjZjLTAuMS0yLjEtMS41LTIuOC00LjgtMi44bDIuMiA5LjZzMS44LTEuNyAzLTEuOGMwIDAtMC40LTQuNi0wLjQtNXoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDEzLjJjLTMuNSAwLTYuNC0yLjktNi40LTYuNHMyLjktNi40IDYuNC02LjQgNi40IDIuOSA2LjQgNi40LTIuOCA2LjQtNi40IDYuNHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Im05LjQgNi44YzAtMyAyLjEtNS41IDQuOS02LjMtMC41LTAuMS0xLTAuMi0xLjYtMC4yLTMuNSAwLTYuNCAyLjktNi40IDYuNHMyLjkgNi40IDYuNCA2LjRjMC42IDAgMS4xLTAuMSAxLjYtMC4yLTIuOC0wLjYtNC45LTMuMS00LjktNi4xeiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTguMyAyMi40Yy0yIDAuNC0yLjkgMS40LTMuMSAzLjVsLTAuNiAxOC42czEuNyAwLjcgMy42IDAuOWwwLjEtMjN6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPgo=';

class PageLayoutDefaultNav extends React.Component {
  constructor(props) {
    super(props);
    // Set initial isNavOpen state based on window width
    const isNavOpen = typeof window !== 'undefined' && window.innerWidth >= parseInt(breakpointMd.value, 10);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
      isNavOpen
    };
  }

  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  onNavToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem, isNavOpen } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavItem to="#nav-link1" itemId={0} isActive={activeItem === 0}>
            System Panel
          </NavItem>
          <NavItem to="#nav-link2" itemId={1} isActive={activeItem === 1}>
            Policy
          </NavItem>
          <NavItem to="#nav-link3" itemId={2} isActive={activeItem === 2}>
            Authentication
          </NavItem>
          <NavItem to="#nav-link4" itemId={3} isActive={activeItem === 3}>
            Network Services
          </NavItem>
          <NavItem to="#nav-link5" itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );
    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon /> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem component="button">Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem component="button">Separated Action</DropdownItem>
    ];
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.srOnly, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="nav-toggle" aria-label="Overflow actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="nav-toggle" aria-label="Overflow actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.srOnly, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Kyle Baker</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
    const bgImages = {
      [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
      [BackgroundImageSrc.md]: '/assets/images/pfbg_992.jpg',
      [BackgroundImageSrc.md2x]: '/assets/images/pfbg_992@2x.jpg',
      [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
      [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
      // [BackgroundImageSrc.xl]: '/assets/images/pfbg_2000.jpg',
      [BackgroundImageSrc.xl]: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAALCAYAAADx/yZ6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPlSURBVFiF5ZhdiFVVFMd/y5qkLxmbIhRBdCoherDCIIYQNArrIaxGafp8cKSCPl4iJu0lferjoSLMHioqDK0MgoJ5KCyKxFQKIwuaTKiYdNBRcsy8M38fzjq15865c/fZZ8ZB+sPm7rX2Wv+99rnrrL33QcU4IqlX0iJKQNIm9/9JkkX6tDSIIcRrTTgujuB4LiKWx5pwLIvguLqB75CkHZLuiHkuznXUfR+s088PeNsieGY3Wde6CI7NbvtsbPzut879BiRdUjd2qaRDPr4GYFoDnhnATcA2SZdHTtwGLHfxCuCGMoH/D3AusAh4X9LtJX1fkLRgEmI6HVgP7AXagPpkfhGYCXwPZAUjeEv+rYaS5kra4/qXY2aV9Ljbj/jv27ERS5oetO/c/6FAd3ZJjn3O0RXozorgyCvkl7GxF3DkFbK/Tj9H0nYf+zCSK6+QkrRL0jmur1IhZyeuK6lCuu/iIC9udN0yl4cldeS2hRXSzPYDn7g4J3Lebv9dD9SAOyVdFONoZifyBsjVtUBfK8mRI+QYjlzHpMDMfgM+czH2meaoAdcAT09oUKcJZvY58IaLG/wleiWXzeyr3DasPBdKmun9y4C7vL+z2YSe4VcCf5GV3uuAm4F7gJcS1zGVWCBpi/drZtaVwNEi6dpAbgXyrXpvSa7XgdVAj6Re4I+EeHJslHTc+x+Y2eYKXGXwBHArWW7tAuYCvwNPjbLS+Ngt6YJmM0l60+03unyvy3vKRi3pW/ftbm7dkGOfc6wo6Vd0qTnR3HMUR6NLTY4DktojufIte4mkd73/i6SFAV+VS80zJdaVvGUHHF118y+vtwkr5KfAIe8fJcvit8zsWJNJWoFOFw9K6nReAVdJut7Mvk5dxBShj/8O4COJHMPAfu/PIrvU/AgsNbOUCvcw0AHMIzsWpeJJYND7uyvwlIaZbZK0GlgM9JrZmLN0mJA9ZvZNwjx3A+d5f03B+CrgTEvIfjMb91NTBAbMrB1A0iNkR5d2YHoKmZkdlnQfWeG4pUJc7yS+EBOFPrKE7CsabPTZpwxW+e9O4L2gfeT6lZJmTMA8ZzJeBX4GWoCeVBIz2wY8D0R9450ktCq75Ydt3kSRV0pIZZ+KFpJta51mtiJot5FtCecDKZeCqURHgzPX1hQyMzsJrHXxAUnzK8S2FthRwb8qusmqW9hK3xUaYRrwA/AxMJDgvxI4DGw1s18Lxjf4eGfBWCMcBPqBoYR4chxwjuPNDOvwN1m8YRsc12Msht3vSJ1+C/AF2ZeIRyO5Bp3rZK7w5L4f+NPHVOw6CiNu+0/kvEU4xthnk/KMhtyn8P89BXZ27HtWql3DAAAAAElFTkSuQmCC',
      [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
      [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
      // [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
      [BackgroundImageSrc.filter]: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAALCAYAAADx/yZ6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPlSURBVFiF5ZhdiFVVFMd/y5qkLxmbIhRBdCoherDCIIYQNArrIaxGafp8cKSCPl4iJu0lferjoSLMHioqDK0MgoJ5KCyKxFQKIwuaTKiYdNBRcsy8M38fzjq15865c/fZZ8ZB+sPm7rX2Wv+99rnrrL33QcU4IqlX0iJKQNIm9/9JkkX6tDSIIcRrTTgujuB4LiKWx5pwLIvguLqB75CkHZLuiHkuznXUfR+s088PeNsieGY3Wde6CI7NbvtsbPzut879BiRdUjd2qaRDPr4GYFoDnhnATcA2SZdHTtwGLHfxCuCGMoH/D3AusAh4X9LtJX1fkLRgEmI6HVgP7AXagPpkfhGYCXwPZAUjeEv+rYaS5kra4/qXY2aV9Ljbj/jv27ERS5oetO/c/6FAd3ZJjn3O0RXozorgyCvkl7GxF3DkFbK/Tj9H0nYf+zCSK6+QkrRL0jmur1IhZyeuK6lCuu/iIC9udN0yl4cldeS2hRXSzPYDn7g4J3Lebv9dD9SAOyVdFONoZifyBsjVtUBfK8mRI+QYjlzHpMDMfgM+czH2meaoAdcAT09oUKcJZvY58IaLG/wleiWXzeyr3DasPBdKmun9y4C7vL+z2YSe4VcCf5GV3uuAm4F7gJcS1zGVWCBpi/drZtaVwNEi6dpAbgXyrXpvSa7XgdVAj6Re4I+EeHJslHTc+x+Y2eYKXGXwBHArWW7tAuYCvwNPjbLS+Ngt6YJmM0l60+03unyvy3vKRi3pW/ftbm7dkGOfc6wo6Vd0qTnR3HMUR6NLTY4DktojufIte4mkd73/i6SFAV+VS80zJdaVvGUHHF118y+vtwkr5KfAIe8fJcvit8zsWJNJWoFOFw9K6nReAVdJut7Mvk5dxBShj/8O4COJHMPAfu/PIrvU/AgsNbOUCvcw0AHMIzsWpeJJYND7uyvwlIaZbZK0GlgM9JrZmLN0mJA9ZvZNwjx3A+d5f03B+CrgTEvIfjMb91NTBAbMrB1A0iNkR5d2YHoKmZkdlnQfWeG4pUJc7yS+EBOFPrKE7CsabPTZpwxW+e9O4L2gfeT6lZJmTMA8ZzJeBX4GWoCeVBIz2wY8D0R9450ktCq75Ydt3kSRV0pIZZ+KFpJta51mtiJot5FtCecDKZeCqURHgzPX1hQyMzsJrHXxAUnzK8S2FthRwb8qusmqW9hK3xUaYRrwA/AxMJDgvxI4DGw1s18Lxjf4eGfBWCMcBPqBoYR4chxwjuPNDOvwN1m8YRsc12Msht3vSJ1+C/AF2ZeIRyO5Bp3rZK7w5L4f+NPHVOw6CiNu+0/kvEU4xthnk/KMhtyn8P89BXZ27HtWql3DAAAAAElFTkSuQmCC'
    };

    const Header = (
      <PageHeader
        logo={<Brand src={brandImg} alt="Patternfly Logo" />}
        toolbar={PageToolbar}
        avatar={<Avatar src={avatarImg} alt="Avatar image" />}
        showNavToggle
        onNavToggle={this.onNavToggle}
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} isNavOpen={isNavOpen} />;

    return (
      <React.Fragment>
        <BackgroundImage src={bgImages} />
        <Page header={Header} sidebar={Sidebar}>
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main Title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of it’s relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery gutter="md">
              {Array.apply(0, Array(10)).map((x, i) => (
                <GalleryItem key={i}>
                  <Card>
                    <CardBody>This is a card</CardBody>
                  </Card>
                </GalleryItem>
              ))}
            </Gallery>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}

export default PageLayoutDefaultNav;
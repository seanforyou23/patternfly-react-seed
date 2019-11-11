import * as React from 'react';
import { debounce } from '@patternfly/react-core';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { css } from '@patternfly/react-styles';

// legacy export now, RowWrapperRow can simply be typed as IRow in the future
export interface RowWrapperRow {
  isOpen?: boolean;
  isExpanded?: boolean;
  isHeightAuto?: boolean;
}

export interface RowWrapperProps {
  trRef?: React.Ref<any> | Function;
  className?: string;
  onScroll?: React.UIEventHandler;
  onResize?: React.UIEventHandler;
  row?: RowWrapperRow;
  rowProps?: object;
}

class RowWrapper extends React.Component<RowWrapperProps, {}> {
  static defaultProps = {
    className: '' as string,
    row: {
      isOpen: undefined as unknown,
      isExpanded: undefined as unknown,
      isHeightAuto: undefined as unknown
    } as RowWrapperRow,
    rowProps: null as any
  };
  _unmounted = true;

  constructor(props: RowWrapperProps) {
    super(props);

    if (props.onScroll) {
      this.handleScroll = debounce(this.handleScroll, 100);
    }
    if (props.onResize) {
      this.handleResize = debounce(this.handleResize, 100);
    }
  }

  componentDidMount() {
    this._unmounted = false;

    if (this.props.onScroll) {
      window.addEventListener('scroll', this.handleScroll);
    }
    if (this.props.onResize) {
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillUnmount() {
    this._unmounted = true;

    if (this.props.onScroll) {
      window.removeEventListener('scroll', this.handleScroll);
    }
    if (this.props.onResize) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleScroll = (event: Event): void => {
    if (!this._unmounted) {
      this.props.onScroll && this.props.onScroll((event as unknown) as React.UIEvent<Element>);
    }
  };

  handleResize = (event: Event) => {
    if (!this._unmounted) {
      this.props.onResize && this.props.onResize((event as unknown) as React.UIEvent<Element>);
    }
  };

  render() {
    const {
      trRef,
      className,
      onScroll,
      onResize,
      row,
      rowProps,
      ...props
    } = this.props;

    return (
      <tr
        {...props}
        ref={trRef as React.Ref<any>}
        className={css(
          className,
          ((row && row.isExpanded) !== undefined) && styles.tableExpandableRow,
          (row && row.isExpanded) && styles.modifiers.expanded,
          (row && row.isHeightAuto) && styles.modifiers.heightAuto
        )}
        hidden={row && row.isExpanded !== undefined && (row && !row.isExpanded)}
      />
    );
  }
}

export { RowWrapper };

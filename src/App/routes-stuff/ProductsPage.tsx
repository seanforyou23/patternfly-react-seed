import * as React from 'react';
import { IProduct, products } from './ProductsData';

interface IState {
  products: IProduct[];
}

class ProductsPage extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.setState({products});
  }
}

export default ProductsPage;

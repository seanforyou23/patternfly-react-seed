console.log('--------------------------Exports');
// Exports
export interface Foo {
  bar: string;
}

interface IProduct {
  name: string;
  unitPrice: number;
}

class Product {
  name: string = ''; // either set it initially here
  unitPrice: number;

  constructor() {
    this.unitPrice = 0; // or set the property in the constructor
  }
}

export {
  IProduct,
  Product as ProductBuilder
};

// This could be imported like - import Thingie from './product';
// not required to use the identifier "foobar" in this case
export default interface foobar {
  name: string;
  unitPrice: number;
}

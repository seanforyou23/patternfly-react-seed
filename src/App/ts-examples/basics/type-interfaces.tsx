// Interfaces
let customer: object;
customer = {
  name: 'Lamps Ltd',
  turnover: 2000134,
  active: true
};
// wrong
// customer.turnover = 2;

interface Product {
  readonly name: string;
  unitPrice: number;
}
// wrong
// const table: Product = {
//   name: 'Table',
//   price: 500
// }
interface OrderDetail {
  product: Product;
  quantity: number;
  getTotal: GetTotal; // could also have been getTotal(discount?: number): number;
  dateAdded?: Date;
}
const table: Product = {
  name: 'Table',
  unitPrice: 500
}
// wrong
// table.name = 'foo';
const tableOrder: OrderDetail = {
  product: table,
  quantity: 1,
  getTotal(discountPercentage?: number) {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * (discountPercentage || 0);
    return priceWithoutDiscount - discountAmount;
  }
}

console.log('--------------------------');
// Method signatures - see addition of getTotal above
console.log(tableOrder.getTotal());

// Extending interfaces
interface DiscountCode {
  code: string;
  percentage: number;
}
interface ProductWithDiscountCodes extends Product {
  discountCodes: DiscountCode[];
}
const discountedTable: ProductWithDiscountCodes = {
  discountCodes: [
    {code: 'deathntaxes', percentage: 0.2},
    {code: 'extra10', percentage: 10}
  ],
  name: 'Old, still expensive table',
  unitPrice: 3000
}

console.log('--------------------------');
// Type aliases
type GetTotal = (discount?: number) => number;

type IProduct = {
  name: string;
  unitPrice: number;
}
type IOrderDetail = {
  product: IProduct;
  quantity: number;
  getTotal: (discount: number) => number;
}
const taTable: IProduct = {
  name: 'Table',
  unitPrice: 500
}
const orderDetail: IOrderDetail = {
  product: taTable,
  quantity: 1,
  getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice;
    const discountAmount = priceWithoutDiscount - discount;
    return priceWithoutDiscount - discountAmount;
  }
}

// wrong, can't extend or implement a type alias
// type foo extends IProduct {}
// can create an interface based off of a type alias
interface taExtension extends IProduct {
  foo: string;
}
const bar: taExtension = {
  foo: 'something',
  name: 'else',
  unitPrice: 1000
}

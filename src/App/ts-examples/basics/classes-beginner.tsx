console.log('--------------------------Classes');
// Classes
class Product {
  name: string = ''; // either set it initially here
  unitPrice: number;

  constructor() {
    this.unitPrice = 0; // or set the property in the constructor
  }
}
const table = new Product();
table.name = 'foobar',
table.unitPrice = 500;
class OrderDetailEx1 {
  product: Product = table; // must initialize like this when sans constructor
  quantity: number = 1; // must initialize like this when sans constructor
  getTotal(discount?: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * (discount || 0);
    return priceWithoutDiscount - discountAmount;
  }
}
const orderDetail = new OrderDetailEx1();
table.unitPrice = 245;
orderDetail.product = table;
orderDetail.quantity = 7;
const total = orderDetail.getTotal(0.1);
console.log(total);
console.log('--------------------------Implementing interfaces');
// Implementing interfaces
interface IOrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
}
class OrderDetailEx2 implements IOrderDetail {
  product: Product = table; // must initialize like this when sans constructor
  quantity: number = 1; // must initialize like this when sans constructor
  getTotal(discount: number) {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * (discount || 0);
    return priceWithoutDiscount - discountAmount;
  }
}
console.log('--------------------------Constructors');
// Constructors
class OrderDetail implements IOrderDetail {
  // product: Product; // we can omit implementing this property by using the
  // quantity: number; // public keyword before the parameters in the constructor
  constructor(public product: Product, public quantity: number = 1) {
    this.product = product;
    this.quantity = quantity;
  }
  getTotal(discount: number): number {
    return discount;
  }
}
const otherOrderDetail = new OrderDetail(table);
console.log('--------------------------Extending classes');
// Extending classes
interface DiscountCode {
  code: string;
  percentage: number;
}
class ProductWithDiscountCodes extends Product {
  discountCodes: DiscountCode[] = [];
}
const tableEx2 = new ProductWithDiscountCodes();
tableEx2.name = 'Table';
tableEx2.unitPrice = 500;
tableEx2.discountCodes = [
  {code: 'summer10', percentage: 0.1},
  {code: 'bfri', percentage: 0.2}
]
// when a parent class has a constructor, the child class
// mustpass the constructor parameters using super()
// class ProductEx2 {
//   constructor(public name: string, public unitPrice: number) {}
// }
class ProductEx3 {
  name: string = ''; // either set it initially here
  unitPrice: number;

  constructor(unitPrice: number) {
    this.unitPrice = unitPrice; // or set the property in the constructor
  }
}
class ProductWithDiscountCodesEx2 extends ProductEx3 {
  constructor(public unitPrice: number) {
    super(unitPrice);
  }
  discountCodes: DiscountCode[] = [];
}
console.log('--------------------------Abstract classes');
// Abstract classes
abstract class ProductEx4 {
  name: string = '';
  unitPrice: number = 0;
  abstract delete(): void;
}
// wrong
// const foo = new ProductEx4();
class Food extends ProductEx4 {
  deleted: boolean = false;
  constructor(public bestBefore: Date) {
    super();
  }
  delete() {
    this.deleted = true;
  }
}
const bread = new Food(new Date(2019, 3, 5));
export {};

console.log('--------------------------Access modifiers');
// Access modifiers
class Product {
  name: string = '';
  unitPrice: number = 0;
}
 class OrderDetail {
  public product: Product = new Product();
  public quantity: number = 0;
  private deleted: boolean = false;
  public getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * (discount || 0);
    return priceWithoutDiscount - discountAmount;
  }
  private delete(): void {
    this.deleted = true;
  }
 }
 const order = new OrderDetail();
 // wrong
// order.deleted = true;
console.log('--------------------------Property setters and getters');
// Property setters and getters
class ProductEx2 {
  name: string = '';
  // unitPrice: number = 0; // don't do this
  private _unitPrice: number = 0; // instead do this with a corresponding getter/setter
  get unitPrice(): number {
    return this._unitPrice;
  }
  set unitPrice(value: number) {
    if (value < 0) {
      value = 0;
    }
    this._unitPrice = value;
  }
}
const table = new ProductEx2();
table.name = 'Table';
console.log(table.unitPrice); // invokes the getter
table.unitPrice = -10; // invokes the setter
console.log(table.unitPrice);
console.log('--------------------------Static classes');
// Static classes
class OrderDetailEx2 {
  product: Product = new Product();
  quantity: number = 0;
  static getTotal(unitPrice: number, quantity: number, discount: number): number {
    // instead of referencing properties on the class like this.product.unitPrice
    // we need to move this static method's dependencies to parameters in the function (when using a static method)
    const priceWithoutDiscount = unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * (discount || 0);
    return priceWithoutDiscount - discountAmount;
  }
}
const total = OrderDetailEx2.getTotal(100, 2, 0.1);
console.log(total);
export {};

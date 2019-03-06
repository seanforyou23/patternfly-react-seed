import { ProductBuilder as Product, IProduct } from './product';
import Thingie from './product'; // name the default export whatever you want here
class OrderDetail {
  public product: IProduct = new Product();
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

const thing: Thingie = {
  name: 'table',
  unitPrice: 500
}

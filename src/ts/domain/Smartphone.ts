import Buyable from './Buyable';
import Gadgets from './Gadgets';

export default class Smartphone extends Gadgets implements Buyable {
  constructor(
      readonly id: number,
      readonly name: string,
      readonly manufacturer: string,
      readonly price: number,
      readonly gadget: boolean,
  ) {
    super(id, name, manufacturer, price, gadget);
   }
}
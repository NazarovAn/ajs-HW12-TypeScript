import Buyable from './Buyable';
import Digital from './Digital';

export default class Movie extends Digital implements Buyable {
  constructor(
      readonly id: number,
      readonly name: string,
      readonly year: number,
      readonly price: number,
      readonly tagline: string,
      readonly country: string,
      readonly genre: string,
      readonly length: string,
      readonly digital: boolean
  ) {
    super(id, name, price, digital);
  }
}
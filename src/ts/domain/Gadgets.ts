import Buyable from "./Buyable";

export default class Gadgets implements Buyable {
  quantity: number = 1;
  constructor(
    readonly id: number,
    readonly name: string,
    readonly manufacturer: string,
    readonly price: number,
    readonly gadget: boolean,
) {}
}
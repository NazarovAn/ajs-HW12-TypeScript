import Buyable from "./Buyable";

export default class Digital implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly digital: boolean,
) { }
}
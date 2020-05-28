import Buyable from './Buyable';
import Digital from './Digital';

export default class Book extends Digital implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
        readonly pages: number,
        readonly digital: boolean,
    ) { 
        super(id, name, price, digital);
    }
}
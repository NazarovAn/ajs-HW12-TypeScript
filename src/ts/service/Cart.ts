import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    private checkInCart(item: Buyable): boolean {
        if (this._items.some((inCart) => inCart.id === item.id)) {
            return true
        }
        return false
    }

    add(item: Buyable): void {
        if(!this.checkInCart(item) && item.digital) {
            this._items.push(item);
            return 
        } if (item.gadget) {
            this._items.push(item);
            return
        } else {
            throw new Error('Такой товар уже есть в корзине')
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    cartSum(): number {
        let sum: number = 0;
        this._items.forEach((item) => sum += item.price);
        return sum
    }

    cartDiscount(discount: number): number {
        let sum: number = this.cartSum()
        return sum - (sum * (discount / 100))
    }

    removeItem(id: number): void {
        this._items = this._items.filter(cartItem => cartItem.id !== id);
    }

    removeOneItem(id: number): void {
        const index = this._items.findIndex((inCart) => inCart.id === id);
        this._items.splice(index,1);
    }
}

import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    private checkInCart(item: Buyable): boolean {
        if (this._items.some((inCart) => inCart.id === item.id)) {
            return true
        }
        return false
    }

    // Не удалось использоавть без any
    findInCart(id: number): any {
        const sameItem = this._items.find((inCart) => inCart.id === id);
        if(sameItem !== undefined) {
            return sameItem
        }
    }

    add(item: Buyable): void {
        if(!this.checkInCart(item) && item.digital) {
            this._items.push(item);
            return 
        } if (item.gadget) {
            const sameItem = this.findInCart(item.id);            
            if (sameItem?.quantity) {
                sameItem.quantity += 1;
                return
            }         
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
        this._items.forEach((item) => {
            const quantityInCart = item.quantity;
            if (quantityInCart !== undefined) {
                sum += (item.price * quantityInCart);
                return
            }
            sum += item.price;
        });
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
        const itemToRemove = this.findInCart(id);
        if(itemToRemove === undefined) {
            throw new Error('No such item in cart');
        }
        if(itemToRemove.digital){
            this.removeItem(itemToRemove.id)
            return
        }
        if(itemToRemove.quantity !== undefined) {
            itemToRemove.quantity -= 1;
            if (itemToRemove.quantity === 0) {
                this.removeItem(itemToRemove.id);
            }
        }
    }
}

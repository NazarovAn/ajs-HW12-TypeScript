export default interface Buyable {
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly digital?: boolean,
    readonly gadget?: boolean,
    quantity?: number
}
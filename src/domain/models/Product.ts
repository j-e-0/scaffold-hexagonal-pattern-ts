export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number
    ) {}

    changePrice(newPrice: number) {
        this.price = newPrice;
    }
}

export class Product {
    constructor(
        public id: string,
        public name: string,
        public price: number
    ) {}

    changePrice(newPrice: number) {
        this.price = newPrice;
    }
}

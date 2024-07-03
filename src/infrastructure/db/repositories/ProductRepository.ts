import { Product } from '../../../domain/models/Product';

class ProductRepository {
    private products: Product[] = [];

    async save(product: Product): Promise<Product> {
        this.products.push(product);
        return product;
    }

    async findById(id: string): Promise<Product | null> {
        return this.products.find(product => product.id === id) || null;
    }
}

export const productRepository = new ProductRepository();

import { Product } from '../models/Product';
import { productRepository } from '../../infrastructure/db/repositories/ProductRepository';

class ProductService {
    async createProduct(data: any): Promise<Product> {
        const product = new Product(data.id, data.name, data.price);
        return productRepository.save(product);
    }

    async getProduct(id: string): Promise<Product | null> {
        return productRepository.findById(id);
    }
}

export const productService = new ProductService();

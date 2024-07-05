import { Product } from '../models/Product';
import { ProductRepositoryInterface } from '../interfaces/ProductRepositoryInterface';

export class ProductService {

  repository: ProductRepositoryInterface;

  constructor(repository: ProductRepositoryInterface){
    this.repository = repository
 }

  async createProduct(data: any): Promise<Product> {
    return this.repository.createProduct(data);
  }

  async getProduct(id: number): Promise<Product | null> {
    return this.repository.getProductById(id);
  }
}
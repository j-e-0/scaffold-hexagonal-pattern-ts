import { Product } from '../models/Product';

export interface ProductRepositoryInterface {
  createProduct(data: any): Promise<Product>;
  getProductById(id: number): Promise<Product | null>;
}

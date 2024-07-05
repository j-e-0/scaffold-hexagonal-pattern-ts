import { Product } from '../../../domain/models/Product';
import { Product as ProductDatabase } from '../models/Product';
import { ProductRepositoryInterface } from '../../../domain/interfaces/ProductRepositoryInterface';

class ProductRepository implements ProductRepositoryInterface{
  async createProduct(data: any): Promise<Product> {
    const product = await ProductDatabase.create(data);
    return new Product(product.id, product.name, product.price);
  }

  async getProductById(id: number): Promise<Product | null> {
    const product = await ProductDatabase.findByPk(id);

    if(product != null)
      return new Product(product.id, product.name, product.price);

    return product;
  }
}

export const productRepository = new ProductRepository()

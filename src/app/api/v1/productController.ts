import { Request, Response } from 'express';
import { ProductService } from '../../../domain/services/ProductService';
import { productRepository } from '../../../infrastructure/db/repositories/ProductRepository';

export class ProductController {

    service: ProductService;

    constructor() {
        this.service = new ProductService(productRepository)
    }

    async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const product = await this.service.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: 'An unknown error occurred' });
            }
        }
    }

    async getProduct(req: Request, res: Response): Promise<void> {
        try {
            const productId = parseInt(req.params.id, 10);
            const product = await this.service.getProduct(productId);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: 'An unknown error occurred' });
            }
        }
    }
}

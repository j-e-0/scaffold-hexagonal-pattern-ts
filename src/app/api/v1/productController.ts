import { Request, Response } from 'express';
import { productService } from '../../../domain/services/ProductService';

export class ProductController {
    async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const product = await productService.createProduct(req.body);
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
            const product = await productService.getProduct(req.params.id);
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

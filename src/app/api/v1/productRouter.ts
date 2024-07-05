import { Router } from 'express';
import { ProductController } from './productController';
import { validate } from '../../middlewares/validate';
import { validateNumber } from '../../middlewares/validateNumber';
import { productSchema } from './schemas/ProductSchema';

const router = Router();
const productController = new ProductController();

router.post('/', validate(productSchema), (req, res) => productController.createProduct(req, res));
router.get('/:id', validateNumber, (req, res) => productController.getProduct(req, res));

export default router;
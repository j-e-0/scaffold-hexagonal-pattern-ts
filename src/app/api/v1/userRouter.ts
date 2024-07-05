import { Router } from 'express';
import { UserController } from './userController';
import { validate } from '../../middlewares/validate';
import { validateNumber } from '../../middlewares/validateNumber';
import { userSchema } from './schemas/UserSchema';

const router = Router();
const userController = new UserController();

router.post('/', validate(userSchema), (req, res) => userController.createUser(req, res));
router.get('/:id', validateNumber, (req, res) => userController.getUser(req, res));

export default router;
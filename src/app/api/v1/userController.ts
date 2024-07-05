import { Request, Response } from 'express';
import { UserService } from '../../../domain/services/UserService';
import { userRepository } from '../../../infrastructure/db/repositories/UserRepository';

export class UserController {

    service: UserService;

    constructor() {
        this.service = new UserService(userRepository)
    }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.service.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(400).json({ error: 'An unknown error occurred' });
            }
        }
    }

    async getUser(req: Request, res: Response): Promise<void> {
        try {
            const userId = parseInt(req.params.id, 10);
            const user = await this.service.getUser(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
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

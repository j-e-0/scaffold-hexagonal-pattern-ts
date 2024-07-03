import { User } from '../models/User';
import { userRepository } from '../../infrastructure/db/repositories/UserRepository';

class UserService {
    async createUser(data: any): Promise<User> {
        const user = new User(data.id, data.username, data.email, data.password);
        return userRepository.save(user);
    }

    async getUser(id: string): Promise<User | null> {
        return userRepository.findById(id);
    }
}

export const userService = new UserService();

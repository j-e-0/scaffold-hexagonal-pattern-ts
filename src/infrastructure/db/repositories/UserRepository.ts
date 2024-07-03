import { User } from '../../../domain/models/User';

class UserRepository {
    private users: User[] = [];

    async save(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    async findById(id: string): Promise<User | null> {
        return this.users.find(user => user.id === id) || null;
    }
}

export const userRepository = new UserRepository();

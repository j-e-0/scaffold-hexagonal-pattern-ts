import { User } from '../../../domain/models/User';
import { UserRepositoryInterface } from '../../../domain/interfaces/UserRepositoryInterface';
import { User as UserDatabase } from '../models/User';

class UserRepository implements UserRepositoryInterface {
  async createUser(data: any): Promise<User> {
    const user = await UserDatabase.create(data);
    return new User(user.id, user.username, user.email, user.password);
  }

  async getUserById(id: number): Promise<User | null> {
    const user = await UserDatabase.findByPk(id);

    if(user != null)
        return new User(user.id, user.username, user.email, user.password);

    return user;
  }

  async getUserByUsername(username: string): Promise<User | null> {
    const user = await UserDatabase.findOne({ where: { username } });

    if(user != null)
      return new User(user.id, user.username, user.email, user.password);
    
    return user;
  }
}

export const userRepository = new UserRepository();

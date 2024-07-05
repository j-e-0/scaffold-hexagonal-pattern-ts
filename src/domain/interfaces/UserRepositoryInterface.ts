import { User } from '../models/User';

export interface UserRepositoryInterface {
  createUser(data: any): Promise<User>;
  getUserById(id: number): Promise<User | null>;
  getUserByUsername(username: string): Promise<User | null>;
}

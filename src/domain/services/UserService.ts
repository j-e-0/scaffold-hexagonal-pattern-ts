import { User } from '../models/User';
import { UserRepositoryInterface } from '../interfaces/UserRepositoryInterface';

export class UserService {

  repository: UserRepositoryInterface;
  
  constructor(repository: UserRepositoryInterface){
     this.repository = repository
  }

  async createUser(data: any): Promise<User> {
    return this.repository.createUser(data);
  }

  async getUser(id: number): Promise<User | null> {
    return this.repository.getUserById(id);
  }
}
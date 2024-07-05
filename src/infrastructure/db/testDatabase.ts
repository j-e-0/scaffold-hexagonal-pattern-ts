import { Sequelize } from 'sequelize-typescript';
import { User } from './models/User';
import { Product } from './models/Product';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
  models: [User, Product],
});

export const testDb = sequelize;
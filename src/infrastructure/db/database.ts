import { Sequelize } from 'sequelize-typescript';
import { User } from './models/User';
import { Product } from './models/Product';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  models: [User, Product],
});

export const db = sequelize;
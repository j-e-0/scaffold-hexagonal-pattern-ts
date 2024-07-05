import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  name!: string;

  @Column
  price!: number;
}
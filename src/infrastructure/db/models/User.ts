import { Table, Column, Model, PrimaryKey, AutoIncrement, Unique } from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Unique
  @Column
  username!: string;

  @Unique
  @Column
  email!: string;

  @Column
  password!: string;
}

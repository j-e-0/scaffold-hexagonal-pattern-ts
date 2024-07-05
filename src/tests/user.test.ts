import request from 'supertest';
import http from 'http';
import app from '../app/main';
import { testDb } from '../infrastructure/db/testDatabase';
import { User } from '../infrastructure/db/models/User';

let server: http.Server;

beforeAll(async () => {
  await testDb.sync();
  server = http.createServer(app);
});

afterAll(async () => {
  await testDb.close();
  server.close();
});

describe('User API', () => {
  beforeEach(async () => {
    await User.destroy({ where: {} }); // Limpa a tabela de usuários antes de cada teste
  });

  it('should create a new user', async () => {
    const response = await request(server)
      .post('/api/v1/users')
      .send({
        username: 'john',
        email: 'john@example.com',
        password: 'password'
      });

    expect(response.status).toBe(201);
    expect(response.body.username).toBe('john');
    expect(response.body.email).toBe('john@example.com');

    const user = await User.findByPk(response.body.id);
    expect(user).not.toBeNull();
    expect(user!.username).toBe('john');
    expect(user!.email).toBe('john@example.com');
  });

  it('should get a user by id', async () => {
    const newUser = await User.create({
      username: 'jane',
      email: 'jane@example.com',
      password: 'password'
    });

    const response = await request(server).get(`/api/v1/users/${newUser.id}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(newUser.id);
    expect(response.body.username).toBe('jane');
    expect(response.body.email).toBe('jane@example.com');
  });

  it('should return 404 if user not found', async () => {
    const response = await request(server).get('/api/v1/users/999');

    expect(response.status).toBe(404);
    expect(response.body.error).toBe('User not found');
  });
});

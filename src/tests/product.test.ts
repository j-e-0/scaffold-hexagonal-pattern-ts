import request from 'supertest';
import http from 'http';
import app from '../app/main';
import { testDb } from '../infrastructure/db/testDatabase';
import { Product } from '../infrastructure/db/models/Product';

let server: http.Server;

beforeAll(async () => {
  await testDb.sync();
  server = http.createServer(app);
});

afterAll(async () => {
  await testDb.close();
  server.close();
});

describe('Product API', () => {
  beforeEach(async () => {
    await Product.destroy({ where: {} }); // Limpa a tabela de produtos antes de cada teste
  });

  it('should create a new product', async () => {
    const response = await request(server)
      .post('/api/v1/products')
      .send({
        name: 'Product1',
        price: 100.0
      });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Product1');
    expect(response.body.price).toBe(100.0);

    const product = await Product.findByPk(response.body.id);
    expect(product).not.toBeNull();
    expect(product!.name).toBe('Product1');
    expect(product!.price).toBe(100.0);
  });

  it('should get a product by id', async () => {
    const newProduct = await Product.create({
      name: 'Product2',
      price: 200.0
    });

    const response = await request(server).get(`/api/v1/products/${newProduct.id}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(newProduct.id);
    expect(response.body.name).toBe('Product2');
    expect(response.body.price).toBe(200.0);
  });

  it('should return 404 if product not found', async () => {
    const response = await request(server).get('/api/v1/products/999');

    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Product not found');
  });
});

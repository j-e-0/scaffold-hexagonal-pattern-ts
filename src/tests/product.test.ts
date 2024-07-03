import request from 'supertest';
import http from 'http';
import app from '../app/main';

describe('Product API', () => {
    let server: http.Server;
    let port: number;

    beforeAll(done => {
        server = http.createServer(app);
        server.listen(0, () => {
            port = (server.address() as any).port;
            done();
        });
    });

    afterAll(done => {
        server.close(done);
    });

    it('should create a new product', async () => {
        const response = await request(server)
            .post('/api/v1/products')
            .send({
                id: '1',
                name: 'Product1',
                price: 100
            });

        expect(response.status).toBe(201);
        expect(response.body.name).toBe('Product1');
        expect(response.body.price).toBe(100);
    });

    it('should get a product by id', async () => {
        await request(server)
            .post('/api/v1/products')
            .send({
                id: '2',
                name: 'Product2',
                price: 200
            });

        const response = await request(server).get('/api/v1/products/2');

        expect(response.status).toBe(200);
        expect(response.body.id).toBe('2');
        expect(response.body.name).toBe('Product2');
        expect(response.body.price).toBe(200);
    });

    it('should return 404 if product not found', async () => {
        const response = await request(server).get('/api/v1/products/999');

        expect(response.status).toBe(404);
        expect(response.body.error).toBe('Product not found');
    });
});

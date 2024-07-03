import request from 'supertest';
import http from 'http';
import app from '../app/main';

describe('User API', () => {
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

    it('should create a new user', async () => {
        const response = await request(server)
            .post('/api/v1/users')
            .send({
                id: '1',
                username: 'john',
                email: 'john@example.com',
                password: 'password'
            });

        expect(response.status).toBe(201);
        expect(response.body.username).toBe('john');
        expect(response.body.email).toBe('john@example.com');
    });

    it('should get a user by id', async () => {
        await request(server)
            .post('/api/v1/users')
            .send({
                id: '2',
                username: 'jane',
                email: 'jane@example.com',
                password: 'password'
            });

        const response = await request(server).get('/api/v1/users/2');

        expect(response.status).toBe(200);
        expect(response.body.id).toBe('2');
        expect(response.body.username).toBe('jane');
        expect(response.body.email).toBe('jane@example.com');
    });

    it('should return 404 if user not found', async () => {
        const response = await request(server).get('/api/v1/users/999');

        expect(response.status).toBe(404);
        expect(response.body.error).toBe('User not found');
    });
});

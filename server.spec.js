const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    test('should bethe testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET status', () => {
        it('should return 200 OK', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        it('returning a json', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json')
        });

        it('returning the correct string', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual('Testing is something')
        })
    });
});
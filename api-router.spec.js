const request = require('supertest');
const router = require('./server');

describe('api-router.js', () => {
    describe('POST', () => {
        it('returns a JSON', () => {
            return request(router)
                .post("/api/characters")
                .send({ name: "cody" })
                .then(res => {
                    expect(res.type).toBe("application/json");
                });
        });
    });

    describe('GET', () => {
        it('returns a JSON', () => {
            return request(router)
                .get("/api/characters")
                .then(res => {
                    expect(res.type).toBe("application/json");
                });
        });
        it('should return Array', () => {
            return request(router)
                .get('/api/characters')
                .then(res => {
                    expect(Array.isArray([res.body])).toBe(true);
                })
        })
    });
});
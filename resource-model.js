const db = require('./data/db-config');

module.exports = {
    add,
    find,
    findById
};

function find() {
    return db('resource');
};

async function add(data) {
    const [id] = await db('resource').insert(data);

    return findById(id);
};

function findById(stuff) {
    return db('resource')
        .where(({ id }))
        .first();
};
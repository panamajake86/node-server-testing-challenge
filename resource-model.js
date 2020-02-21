const db = require('./data/db-config');

module.exports = {
    add,
    find,
    findById,
    remove
};

function find() {
    return db('resource');
};

 function add(data) {
    return db('resource').insert(data);

    // return findById(id);
};

function findById(stuff) {
    return db('resource')
        .where(({ stuff }))
        .first();
};

function remove(id) {
    return db('resource')
        .where({ id })
        .del()
};
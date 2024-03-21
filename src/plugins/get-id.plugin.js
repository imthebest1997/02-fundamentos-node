const { v4: uuidv4 } = require('uuid');
const crypto = require('node:crypto');

const getIdWithUUID = () => {
    return uuidv4();
}

const getIdWithCrypto = () => {
    return crypto.randomUUID();
}

module.exports = { 
    getIdWithUUID,
    getIdWithCrypto
};
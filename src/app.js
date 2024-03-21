// const { getUserById } = require('./js-foundation/04-arrows');
const { buildMakePerson } = require('./js-foundation/05-factory');
const { getIdWithUUID: getUUID, getAge } = require('./plugins');

const makePerson = buildMakePerson({ getUUID, getAge });
const obj = {"name": "John", "birthdate": '1997-09-07', "city": "New York"};
const john = makePerson( obj );

console.log({john});
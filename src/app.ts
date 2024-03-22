import { buildLogger } from './plugins/logger.plugin';

// const getPokemonById = require('./js-foundation/06-promises');

// getPokemonById(1)
//     .then( (pokemon) => console.log({pokemon}) )
//     .catch( (error) => console.log(error) )
//     .finally( () => console.log('Finally!') );


const logger = buildLogger('app.js');
logger.info('Hello, world with ts!');
logger.error('This is an error of ts!');

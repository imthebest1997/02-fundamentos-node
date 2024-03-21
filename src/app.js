const getPokemonById = require('./js-foundation/06-promises');

getPokemonById(1)
    .then( (pokemon) => console.log({pokemon}) )
    .catch( (error) => console.log(error) )
    .finally( () => console.log('Finally!') );

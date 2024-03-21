console.log( process.env );

const {  npm_config_npm_version } = process.env;

//console.table({ npm_config_npm_version });

const characters = ['Mario', 'Luigi', 'Toad', 'Bowser', 'Peach'];

const [, , , , peach] = characters;

console.log( peach);
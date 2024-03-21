const getAgePlugin = require("get-age");

const getAge = (birthdate) => {
    if(!birthdate) return new Error('birthday is required');

    return getAgePlugin(birthdate);
}


module.exports = {
    getAge,
}
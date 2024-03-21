const { getAge } = require('./get-age.plugin');
const { getIdWithUUID } = require('./get-id.plugin');
const { http } = require("./http-client.plugin")


module.exports = {
    getAge,
    getIdWithUUID,
    http
}
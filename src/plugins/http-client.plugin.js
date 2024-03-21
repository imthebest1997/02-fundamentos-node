const axios = require('axios');

const httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url);
        return data;
    },

    post: async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    },

    put: async (url, data) => {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    },

    delete: async (url) => {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        return response.json();
    }    
};


module.exports = {
    http: httpClientPlugin,
};
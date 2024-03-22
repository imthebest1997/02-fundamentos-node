import axios from 'axios';

export const httpClientPlugin = {
    get: async (url: string) => {
        const { data } = await axios.get(url);
        return data;
    },

    post: async (url: string, data: any) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    },

    put: async (url: string, data: any) => {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    },

    delete: async (url: string) => {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        return response.json();
    }    
};

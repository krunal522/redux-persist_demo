import axios from "axios";

const api = async (url = "", method, data = {}) => {
    const options = {
        method,
        // headers: {
        //     'Content-Type': 'multipart/form-data',
        //     "vAuthorization": `Bearer ${token?.replace(/^"(.+(?="$))"$/, '$1')}`
        // },
        data,
        url: `https://unikwork.com/instagram/api/${url}`,
    };
    return axios(options);
};

export default api;
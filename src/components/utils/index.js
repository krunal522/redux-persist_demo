import api from "./axios"

export const userApi = (data) => api('get_data.php', 'GET', data)


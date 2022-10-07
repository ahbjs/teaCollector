const instance = axios.create({
    baseURL: 'https://tea-collector-api.herokuapp.com/',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});
export default instance;
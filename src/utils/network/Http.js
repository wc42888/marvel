import axios from 'axios';

const Http = config => axios.create(config);

export default Http;

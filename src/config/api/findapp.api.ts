import { API_URL } from '@env';
import { AxiosAdapter } from '../../adapters/axios.adapter';

const findAPI = new AxiosAdapter({
    baseUrl: API_URL,
    params: {},
});

export default findAPI;

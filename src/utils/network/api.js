import {MD5} from 'react-native-crypto-js';
import HTTP from './Http';
import apiConfig from '../../config/api';

const {privateKey, publicKey, baseUrl} = apiConfig;

// more specific http request configuartion (auth, timeouts etc) can be added
const marvelRequests = new HTTP({
  baseURL: baseUrl,
});

const generateHash = timestamp => MD5(`${timestamp}${privateKey}${publicKey}`);

const getMarvelData = async (url, config) => marvelRequests.get(url, config);

export const getAllHeros = async () => {
  const timestamp = +new Date();
  const hash = generateHash(timestamp);
  const params = `apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;
  return getMarvelData(`/characters?${params}`);
};

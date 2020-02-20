import {MD5} from 'react-native-crypto-js';
import HTTP from './Http';
import apiConfig from '../../config/api';

const {privateKey, publicKey} = apiConfig;

// more specific http request configuartion (auth, timeouts etc) can be added
const marvelRequests = new HTTP();

const generateHash = timestamp => MD5(`${timestamp}${privateKey}${publicKey}`);

const getParams = () => {
  const timestamp = +new Date();
  const hash = generateHash(timestamp);
  const params = `apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;
  return params;
};

const getMarvelData = async (url, config) => marvelRequests.get(url, config);

export const getAllHeros = async () =>
  getMarvelData(
    `https://gateway.marvel.com/v1/public/characters?${getParams()}`,
  );

export const getHeroComics = async url =>
  getMarvelData(`${url}?${getParams()}`);

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getMarch = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/march.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

export default getMarch;

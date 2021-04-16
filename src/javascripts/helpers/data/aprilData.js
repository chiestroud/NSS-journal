import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getApril = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/april.json`)
    .then((response) => {
      resolve(Object.values(response.data));
    }).catch((error) => reject(error));
});

const addApril = (aprObj, id) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/april.json`, aprObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/april/${response.data.name}.json`, body)
        .then(() => getApril(id).then((aprilArray) => resolve(aprilArray)));
    }).catch((error) => reject(error));
});

export { getApril, addApril };

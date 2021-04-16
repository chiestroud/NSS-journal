import firebase from 'firebase/app';
import 'firebase/auth';
import { getApril } from '../../helpers/data/aprilData';
import getMarch from '../../helpers/data/marchData';
import aprilBuilder from '../form/april';
import februaryBuilder from '../form/february';
import januaryBuilder from '../form/january';
import marchBuilder from '../form/march';
import marchReadOnlyBuilder from '../readOnlyForm/marchBuilderReadOnly';

const navEvents = (id) => {
  document.querySelector('#jan-link').addEventListener('click', januaryBuilder);
  document.querySelector('#feb-link').addEventListener('click', februaryBuilder);
  document.querySelector('#mar-link').addEventListener('click', () => {
    const user = firebase.auth().currentUser;
    if (user) {
      getMarch(id).then((marchArray) => marchBuilder(marchArray));
    } else {
      getMarch(id).then((marchArray) => marchReadOnlyBuilder(marchArray));
    }
  });
  document.querySelector('#apr-link').addEventListener('click', () => {
    getApril(id).then((array) => aprilBuilder(array));
  });
};

export default navEvents;

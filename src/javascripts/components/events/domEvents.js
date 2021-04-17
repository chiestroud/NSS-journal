import firebase from 'firebase/app';
import { addApril, getSingleApril, updateApril } from '../../helpers/data/aprilData';
import getMarch from '../../helpers/data/marchData';
import aprilBuilder from '../form/april';
import aprilAddJournal from '../form/aprilDisplay';
import editAprilForm from '../form/editApril';
import marchBuilder from '../form/march';
import baseModal from '../form/modal';
import marchReadOnlyBuilder from '../readOnlyForm/marchBuilderReadOnly';

const domEvents = (id) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-march-btn')) {
      console.warn('clicked');
    }
    if (e.target.id.includes('delete-modal-march')) {
      console.warn('delete?');
    }
    if (e.target.id.includes('sortByDate')) {
      $('#main').html('Sorry, this button is not working!');
      document.querySelector('#main').innerHTML += '<button type="button" class="btn btn-primary" id="backToMarch">Go Back to March</button>';
    }
    if (e.target.id.includes('backToMarch')) {
      const user = firebase.auth().currentUser;
      if (user) {
        getMarch(id).then((marchArray) => marchBuilder(marchArray));
      } else {
        getMarch(id).then((marchArray) => marchReadOnlyBuilder(marchArray));
      }
    }
    if (e.target.id.includes('addAprilJournal')) {
      aprilAddJournal();
    }
    if (e.target.id.includes('submit-journal')) {
      const obj = {
        date: document.querySelector('#apr-date').value,
        notes: document.querySelector('#april-notes').value
      };
      addApril(obj).then((array) => aprilBuilder(array));
    }
    if (e.target.id.includes('update-apr-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      baseModal('Edit Journal');
      getSingleApril(firebaseKey).then((response) => editAprilForm(response));
      $('#formModal').modal('toggle');
    }
    if (e.target.id.includes('update-apr-journal')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const aprObj = {
        date: document.querySelector('#update-apr-date').value,
        notes: document.querySelector('#update-april-notes').value
      };
      updateApril(firebaseKey, aprObj).then((aprilArray) => aprilBuilder(aprilArray));
      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;

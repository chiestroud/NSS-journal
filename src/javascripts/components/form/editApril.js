const editAprilForm = (aprObj) => {
  document.querySelector('.modal-body').innerHTML = `
  <div class="form-group">
    <label for="Reservation Date">Date: </label>
    <input type="date" class="form-control" id="update-apr-date" placeholder="Enter Date" value="${aprObj.date}" required>
  </div>
  <div class="form-group">
    <label for="Reservation Date">Notes: </label>
    <textarea class="form-control" rows="5" id="update-april-notes" placeholder="Enter Notes" required>${aprObj.notes}</textarea>
  </div>
  <button type="submit" id="update-apr-journal--${aprObj.firebaseKey}" class="btn btn-primary">Update Journal</button>
</form>`;
};

export default editAprilForm;

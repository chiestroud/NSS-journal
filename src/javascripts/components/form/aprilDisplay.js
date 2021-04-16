const aprilAddJournal = () => {
  $('#main').html('');
  document.querySelector('#main').innerHTML += `<form id="add-res-Form" class="mb-4">
  <div class="form-group">
    <label for="Reservation Date">Date: </label>
    <input type="date" class="form-control" id="apr-date" placeholder="Enter Date" required>
  </div>
  <div class="form-group">
    <label for="Reservation Date">Notes: </label>
    <textarea class="form-control" rows="5" id="april-notes" placeholder="Enter Notes" required></textarea>
  </div>
  <button type="submit" id="submit-journal" class="btn btn-primary">Submit Journal</button>
  </form>`;
};

export default aprilAddJournal;

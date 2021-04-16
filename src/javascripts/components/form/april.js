const aprilBuilder = (array) => {
  document.querySelector('#header').innerHTML = `
  <h1> April 2021 Journal</h1>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Option
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" id="addAprilJournal" href="#">Add Journal</a>
    </div>
  </div>`;
  document.querySelector('#main').innerHTML = '';
  array.forEach((april) => {
    const domString = `
    <div id="april-card--${april.firebaseKey}" class="card" style="width: 15rem;">
    <h5 class="card-title">${april.date}</h5>
      <div class="card-body marchInfo middle">
        <h6 id="card-date">Comments for today</h6>
        <p>${april.notes}</p>
        <button class="btn edit-btn" data-toggle="modal" data-target="#formModal" title="Edit ${april.date}" id="edit-march-btn--${april.firebaseKey}"><i id="edit-march-btn--${april.firebaseKey}" class="fas fa-edit fa-lg"></i></button>
        <button class="btn delete-btn" title="Remove ${april.date}" data-toggle="modal" data-target="#formModal" id="delete-modal-march--${april.firebaseKey}"><i class="fas fa-trash-alt" id="delete-modal-march--${april.firebaseKey}"></i></button>
      </div>
    </div>`;
    document.querySelector('#main').innerHTML += domString;
  });
};

export default aprilBuilder;

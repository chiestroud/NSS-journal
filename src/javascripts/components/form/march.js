const marchBuilder = (array) => {
  document.querySelector('#header').innerHTML = '<h1>March 2021 Journal</h1>';
  document.querySelector('#main').innerHTML = '';
  array.forEach((march) => {
    const domString = `
    <div id="march-card--${march.firebaseKey}" class="card" style="width: 20rem;">
    <h5 class="card-title">${march.date}</h5>
      <div class="card-body marchInfo middle">
        <h6 id="card-date">Comments for today</h6>
        <p>${march.note}</p>
        <button class="btn edit-btn" data-toggle="modal" data-target="#formModal" title="Edit ${march.date}" id="edit-march-btn--${march.firebaseKey}"><i id="edit-march-btn--${march.firebaseKey}" class="fas fa-edit fa-lg"></i></button>
        <button class="btn delete-btn" title="Remove ${march.date}" data-toggle="modal" data-target="#formModal" id="delete-modal-march--${march.firebaseKey}"><i class="fas fa-trash-alt" id="delete-modal-march--${march.firebaseKey}"></i></button>
      </div>
    </div>`;
    document.querySelector('#main').innerHTML += domString;
  });
};

export default marchBuilder;

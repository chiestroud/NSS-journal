const marchReadOnlyBuilder = (array) => {
  document.querySelector('#header').innerHTML = '<h1>March 2021 Journal</h1>';
  document.querySelector('#main').innerHTML = '';
  array.forEach((march) => {
    const domString = `
    <div id="march-card--${march.firebaseKey}" class="card" style="width: 20rem;">
    <h5 class="card-title">${march.date}</h5>
      <div class="card-body marchInfo middle">
        <h6 id="card-date">Comments for today</h6>
        <p>${march.note}</p>
      </div>
    </div>`;
    document.querySelector('#main').innerHTML += domString;
  });
};

export default marchReadOnlyBuilder;

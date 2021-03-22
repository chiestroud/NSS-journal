const januaryBuilder = () => {
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#main').innerHTML = `
  <div class="card">
    <h1>January Journal</h1>
    <h2>Link to Chie's January Journal: </h2>
    <a href="https://cs-nss-journal.netlify.app/january.html" target="_blank">Chie's January Journal</a>
  </div>`;
};

export default januaryBuilder;

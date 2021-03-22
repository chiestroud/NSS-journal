const februaryBuilder = () => {
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#main').innerHTML = `
  <div class="card">
    <h1>February Journal</h1>
    <h2>Link to Chie's February Journal: </h2>
    <a href="https://cs-nss-journal.netlify.app/february.html" target="_blank">Chie's February Journal</a>
  </div>`;
};

export default februaryBuilder;

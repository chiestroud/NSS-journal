const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="header"></div>
  <div id="main" class="container d-flex justify-content-around"></div>`;
};

export default domBuilder;

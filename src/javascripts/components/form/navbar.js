const navbarBuilder = () => {
  document.querySelector('#navigation').innerHTML = `
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Chie's NSS Journal</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" id="jan-link" href="#">Jan<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="feb-link">Feb</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="mar-link">Mar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="mar-link">April</a>
        </li>
      </ul>
      <div id="auth-button"></div>
    </div>
  </nav>`;
};

export default navbarBuilder;

import navEvents from '../events/navEvents';
import domBuilder from '../form/domBuilder';
import navbarBuilder from '../form/navbar';
import loginButton from '../loginButton';
import logoutButton from '../logoutButton';

const startApp = (user) => {
  domBuilder();
  navbarBuilder(user);
  if (user) {
    logoutButton();
  } else {
    loginButton();
  }
  navEvents();
};

export default startApp;

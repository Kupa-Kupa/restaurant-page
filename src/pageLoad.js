import homePage from './home';

function pageLoad() {
  const content = document.querySelector('#content');

  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const liHome = document.createElement('li');
  const liMenu = document.createElement('li');
  const liContact = document.createElement('li');

  const homePageElements = homePage();

  h1.innerText = 'Piece-a-Pizza';

  liHome.innerText = 'Home';
  liHome.id = 'Home';

  liMenu.innerText = 'Menu';
  liMenu.id = 'Menu';

  liContact.innerText = 'Contact';
  liContact.id = 'Contact';

  ul.append(liHome, liMenu, liContact);

  nav.append(ul);

  header.append(h1, nav);

  content.append(header, homePageElements.main, homePageElements.footer);
}

export default pageLoad;

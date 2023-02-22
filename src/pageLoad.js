// import homePage so I can retrieve homepage content on first page load
import homePage from './home';
import pizzaImage from './pizza-hero.jpg';

function pageLoad() {
  // get #content div
  const content = document.querySelector('#content');

  // create header with nav and page title
  const header = document.createElement('header');

  const h1Header = document.createElement('h1');
  h1Header.innerText = 'Piece-a-Pizza';

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const liHome = document.createElement('li');
  liHome.innerText = 'Home';
  liHome.id = 'Home';

  const liMenu = document.createElement('li');
  liMenu.innerText = 'Menu';
  liMenu.id = 'Menu';

  const liContact = document.createElement('li');
  liContact.innerText = 'Contact';
  liContact.id = 'Contact';

  ul.append(liHome, liMenu, liContact);
  nav.append(ul);
  header.append(h1Header, nav);

  // create main content section
  const main = document.createElement('main');

  // create h1 element for different page text nodes
  const h1Main = document.createElement('h1');
  h1Main.id = 'h1-main';

  // create paragraph element for different page text nodes
  const p = document.createElement('p');
  p.id = 'p-main';

  //create img element for main content section
  const img = document.createElement('img');
  img.src = pizzaImage;
  img.alt = 'pizza';

  // get object of text nodes for homepage and add text nodes to page
  const homePageText = homePage();
  h1Main.append(homePageText.h1Home);
  p.append(homePageText.pHome);

  // append homepage content to main section
  main.append(h1Main, p, img);

  // create footer
  const footer = document.createElement('footer');
  footer.innerText = 'Made by Kupa';

  // append content to page
  content.append(header, main, footer);
}

export default pageLoad;

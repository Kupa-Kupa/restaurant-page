import pageLoad from './pageLoad';
import homePage from './home';
import contactPage from './contact';
import menuPage from './menu';

pageLoad();

const h1Main = document.querySelector('#h1-main');
const pMain = document.querySelector('#p-main');
const nav = document.querySelector('nav');

nav.addEventListener('click', changeContent);

function changeContent(event) {
  console.log(event.target);

  console.log(h1Main);

  if (event.target.id === 'Home') {
    const homePageText = homePage();
    console.log(homePageText.h1Home);
    h1Main.replaceChildren(homePageText.h1Home);
    pMain.replaceChildren(homePageText.pHome);
  } else if (event.target.id === 'Menu') {
    const menuPageText = menuPage();
    console.log(menuPageText.h1Menu);
    h1Main.replaceChildren(menuPageText.h1Menu);
    pMain.replaceChildren(menuPageText.pMenu);
  } else if (event.target.id === 'Contact') {
    const contactPageText = contactPage();
    console.log(contactPageText.h1Contact);
    h1Main.replaceChildren(contactPageText.h1Contact);
    pMain.replaceChildren(contactPageText.pContact);
  }
}

function pageLoad() {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const main = document.createElement('main');
  const p = document.createElement('p');
  const img = document.createElement('img');
  const footer = document.createElement('footer');

  h1.innerText = 'Piece-a-Pizza';
  p.innerText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, accusamus! Impedit blanditiis quaerat nemo. Sequi rerum quasi totam nam libero!';
  footer.innerText = 'Made by Kupa';

  img.src = '../src/pizza-hero.jpg';
  img.alt = 'pizza';

  header.appendChild(h1);
  main.append(p, img);

  content.append(header, main, footer);
}

export default pageLoad;

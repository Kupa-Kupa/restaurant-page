function homePage() {
  const h1 = document.createElement('h1');
  const main = document.createElement('main');
  const p = document.createElement('p');
  const img = document.createElement('img');
  const footer = document.createElement('footer');

  h1.innerText = 'Piece-of-Pizz';
  p.innerText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, accusamus! Impedit blanditiis quaerat nemo. Sequi rerum quasi totam nam libero!';
  footer.innerText = 'Made by Kupa';

  img.src = '../src/pizza-hero.jpg';
  img.alt = 'pizza';

  main.append(h1, p, img);

  return { main, footer };
}

export default homePage;

function contactPage() {
  const h1Contact = document.createTextNode('Contact  Us');
  const pContact = document.createTextNode(
    "To order a stack of pizzas from Piece-a-Pizza, fax us on 000-123-pizza. We'll get them delivered in 9-12 business days."
  );

  return { h1Contact, pContact };
}

export default contactPage;

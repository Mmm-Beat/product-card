import { products } from "./catalogData.js";

console.log(products);

const productTemplate = document.querySelector('#product-template');
const productList = document.querySelector('#product-list');

function getCardsCount() {
  const answer = prompt('Сколько карточек отобразить? От 1 до 5');
  if (answer >=1 && answer <=5) {
    return Number(answer);
  } else {
    return 0;
  }
}

const count = getCardsCount();

function showCards(cards) {
  cards.forEach(product => {
  const productClone = productTemplate.content.cloneNode(true)
  productClone.querySelector('.product-card__image').src = product.image
  productClone.querySelector('.product-card__purpose').textContent = product.purpose
  productClone.querySelector('.product-card__title').textContent = product.name
  productClone.querySelector('.product-card__description').textContent = product.description
  productClone.querySelector('.product-card__price span').textContent = product.price

  product.ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  productClone.querySelector('.product-card__ingredients').appendChild(li);
});

  productList.appendChild(productClone)
});
}
showCards(products.slice(0, count));

const productsWithReduce = products.reduce((acc, product) => {
  acc.push({[product.name]: product.description});
  return acc;
}, []);
console.log(productsWithReduce);

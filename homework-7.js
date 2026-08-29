function showWeather(city, temperature) {
  console.log(`Сегодня в ${city} температура - ${temperature} градусов по Цельсию.`);
}

showWeather('Махачкале', 28);


const speedLight = 299792458;

function checkSpeed(speed) {
  if (speed > speedLight) {
    console.log('Сверхсветовая скорость!');
  } else if (speed < speedLight) {
    console.log('Субсветовая скорость');
  } else if (speed === speedLight) {
    console.log('Скорость света');
  }
}

checkSpeed(299792458);


const productName = 'iPhone 17 Pro Max';
const productPrice = 95000;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
} else {
  const difference = productPrice - budget;
  console.log(`Вам не хватает ${difference}\u20BD, пополните баланс!`);
}
}

buyProduct(90000);


const name = 'Абдулла';
const surName = 'Магомедов';
const city = 'Махачкалы';

function sayHello() {
  console.log(`Привет ${name} ${surName} из ${city}!`);
}

sayHello();


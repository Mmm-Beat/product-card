const person = {
  name: "Abdulla",
  surname: "Magomedov",
  age: 22,
  email: "vip.poctha@gmail.com",
  job: "Software Engineer",
  position: "Frontend Developer",
  country: "Russia",
  city: "Mahachkala",
  hobbies: ["Coding", "Gaming"],
  relationshipStatus: "Single",
};
console.log(person);
// Прописал объект с перечислением персональных данных согласно 3 пункту задания

const car = {
  brand: "Ferrari",
  model: "F40",
  year: "1987",
  color: "red",
  transmission: "5-speed manual",
  owner: person,
};
console.log(car);
console.log(car.owner.name);
console.log(car.owner.surname);
// Создал объект автомобиля и добавил владельца из объекта person согласно 4 пункту задания

function addMaxSpeed(carObject) {
  if (!carObject.hasOwnProperty("maxSpeed")) {
    carObject.maxSpeed = 200;
  }
}
addMaxSpeed(car);
console.log(car);
// Выполнил задания с использованием данных 4 пункта согласно 5 пункту задания

function getProperty(person, key) {
  console.log(person[key]);
}
getProperty(person, "name");
// Создал функцию для вывода значения, согласно 6 пункту задания

const starkInventory = [
  "Iron Man Armor",
  "Nanotechnology",
  "Holographic Interface",
  "J.A.R.V.I.S.",
];
console.log(starkInventory);
// Создал массив продуктов в стилистике технологий Тони Старка согласно 7 пункту задания

const arabicBooks = [
  {
    title: "Arabic Between Your Hands - Level 1",
    author: "Abdul Rahman Al-Fawzan, Mukhtar Al-Tahir Hussain",
    year: 2014,
    publisher: "Arabic for All",
    coverColor: "Orange",
    genre: "Arabic Language",
  },

  {
    title: "Arabic Between Your Hands - Level 2",
    author: "Abdul Rahman Al-Fawzan, Mukhtar Al-Tahir Hussain",
    year: 2014,
    publisher: "Arabic for All",
    coverColor: "Green",
    genre: "Arabic Language",
  },

  {
    title: "Arabic Between Your Hands - Level 3",
    author: "Abdul Rahman Al-Fawzan, Mukhtar Al-Tahir Hussain",
    year: 2014,
    publisher: "Arabic for All",
    coverColor: "Blue",
    genre: "Arabic Language",
  },
];

arabicBooks.push({
  title: "Arabic Between Your Hands - Level 4",
  author: "Abdul Rahman Al-Fawzan, Mukhtar Al-Tahir Hussain",
  year: 2014,
  publisher: "Arabic for All",
  coverColor: "Red",
  genre: "Arabic Language",
});
console.log(arabicBooks);
// Создал массив объектов, и добавил четвертый объект с помощью push() согласно 8 пункту задания

const marvelComics = [
  {
    title: "Civil War",
    author: "Mark Millar",
    year: 2006,
    coverColor: "Red",
    genre: "Superhero",
    publisher: "Marvel Comics",
  },

  {
    title: "The Infinity Gauntlet",
    author: "Jim Starlin",
    year: 1991,
    coverColor: "Purple",
    genre: "Superhero",
    publisher: "Marvel Comics",
  },

  {
    title: "Secret Wars",
    author: "Jim Shooter",
    year: 1984,
    coverColor: "Yellow",
    genre: "Superhero",
    publisher: "Marvel Comics",
  },
];
console.log(marvelComics);

const allBooks = [...arabicBooks, ...marvelComics];
// Объединил 2 массива 8 и 9 пункта, с помощъю spread-оператора согласно 9 пункту задания

function checkRareStatus(allBooks) {
  return allBooks.map((book) =>
    book.year > 2000 ? (book.isRare = true) : (book.isRare = false),
  );
}

checkRareStatus(allBooks);

console.log(allBooks);
// Добавил свойство isRare с помощью map() согласно 10 пункту задания
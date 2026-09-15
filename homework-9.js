import { comments } from "./comments.js";

console.log(comments);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter((number) => number >= 5);

console.log(numbersFromFive);

const films = [
  "Spider-Man",
  "The Iron Man",
  "Doctor Strange",
  "Captain America",
  "Black Panther",
  "The Incredible Hulk",
];

function isFilmExists(film) {
  if (typeof film !== "string") {
    return "Некорректные входные параметры";
  }
  return films.includes(film);
}
console.log(isFilmExists("Avatar"));

function reverseArray(array) {
  return array.reverse();
}

console.log(reverseArray(films));
console.log(reverseArray(numbers));

const commentsWithCom = comments.filter((comment) => {
  return comment.email.includes(".com");
});

console.log(commentsWithCom);

const updateComments = comments.map((comment) => {
  if (comment.id <= 5) {
    comment.postId = 2;
  } else {
    comment.postId = 1;
  }
  return comment;
});

console.log(updateComments);

const onlyIdName = comments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(onlyIdName);

const commentWithStatus = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));

console.log(commentWithStatus);

const emailsWithReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);

  return acc;
}, []);
console.log(emailsWithReduce);

const emailsWithMap = comments.map((comment) => {
  return comment.email;
});

console.log(emailsWithMap);

const emailsToString = emailsWithReduce.toString();
const emailsJoin = emailsWithMap.join(" - ");

console.log(emailsToString);
console.log(emailsJoin);

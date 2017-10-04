var oneLinerJoke = require('one-liner-joke');

var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');

console.log(getRandomJokeWithTag.body);
console.log(getRandomJokeWithTag.tags);
const generateWord = require('random-word');

const sayHello = () => `Hello ${generateWord()}!`;

module.exports = sayHello;

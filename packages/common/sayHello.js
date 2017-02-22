const generateWord = require('random-word');

const sayHello = additonalText => `Hello ${generateWord()}!${additonalText}`;

module.exports = sayHello;

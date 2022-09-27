const user = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({ text: `${user.name} est au campus de ${user.campus}` }));
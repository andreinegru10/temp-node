//Common JS - every file is module(by default)
//Modules - Encapsulated Code (only share minimum)
//When you import a module, you  actually invoke it - i.e. you run everything in it; if there is a function call, that one will execute on import

const names = require("./4-names");
//{john, peter} = require("./4-names");
const sayHi = require("./5-utils");
const af = require("./6-alternative-flavor");

require("./7-mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

console.log(af.items);
console.log(af.singlePerson);
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

console.log(names.pippo);
console.log(sayHi);
console.log(data);
sayHi('paperino')
sayHi(names.pippo)
sayHi(names.pluto)
require('./7-mind-grenade')
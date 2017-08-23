// ES6
import lib from './lib'
lib('a').then((ranking) => { console.log (ranking) })

// ES5
const brasileirao = require('brasileirao-api')
brasileirao('a').then(function(raking) { console.log(ranking) })
# Brasilerião API

Get ranking of brazilian futebool soccer championship by classification (A, B, C)

## How to install

Open terminal in your project folder, then:

```sh
$ npm install brasileirao-api
```

## How to use

In you project, just do:

- You can change serie to a, b, c

If you are using ES5
```sh
// ES5
const brasileirao = require('brasileirao-api')

// EXAMPLE
brasileirao('a').then(function(raking) {
	console.log(ranking)
})
```

If you are using ES6

```sh
// ES6
import brasileirao from 'brasileirao-api'

// EXAMPLE
brasileirao('a').then((raking) => {
	console.log(ranking)
})
```

If you have any doubts you can check example folder
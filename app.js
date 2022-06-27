const {server} = require('./server.js')

// server.listen(5000)

const lod = require('lodash')

const a = [1,[23,[345,[45]]]]

const newItem = lod.flattenDeep(a)

console.log(newItem);

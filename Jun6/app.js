const _ = require('lodash');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrChunks = _.chunk(arr, 3);
const arrConcat = _.concat(arr, 22, 33, 44, 55);
const arrSlice = _.slice(arr, 4);
const arrLastIndex = _.lastIndexOf(3);
const arrPull = _.pull(4, 44);
const arrCamel = _.camelCase('butterflies');

console.log('Chunks: ' , arrChunks,'Concat: ' , arrConcat,'Slice: ', arrSlice, 'LastIndex: ', arrLastIndex,'Pull: ', arrPull, 'CamelCase: ', arrCamel);

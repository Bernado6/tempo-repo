const {readFileSync, writeFileSync} = require('fs');
console.log('starting task 1')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/results-sync.txt',
                `Here is the result: ${first}, ${second}`,
                {flag:'a'}
                )

console.log('done with task 1');
console.log('starting task 2');
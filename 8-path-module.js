const path = require('path')
// console.log(path)

// returns the partial path
const filepath = path.join('/content', 'subfolder', 'text.txt')
console.log(filepath);

// Returns the file name
const base = path.basename(filepath)
console.log(base)

// Returns Absolute Path: it is important when working with project
const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)





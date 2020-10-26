let path = require('path');

console.log(path.resolve('dist'));

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('build')
    }
}
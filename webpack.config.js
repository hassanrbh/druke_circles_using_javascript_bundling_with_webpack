const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'enter.js',
        path: path.resolve(__dirname, 'webpack'),
    },
};
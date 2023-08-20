const path = require('path');

module.exports = {
    entry: './scripts/main.js', // Adjust the entry file path
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Adjust the output path
    },
};

// __dirname the current location path 
const path = require('path')//used to join the path as concat is not ok for edge cases

module.exports = {
    entry: './src/app.js',//where to start
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, //a regex for .js files
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,  //ends with .css or .scss
            use: [ //gives an array of loaders
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                limit: 100000
            }
        }]
    },
    
    devtool: 'cheap-module-eval-source-map', // for better viewing of code problems in stack trace, exact file we wrote (not going in line 22222 on bundle js)
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}


const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ],

    devServer: {
        contentBase: 'dist',
        port: 49031
    }

}

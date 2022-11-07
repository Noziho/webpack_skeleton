const webpack = require('webpack');
const path = require('path');


module.exports = {
    //Point d'entrée JS, fichier qui contiendra les includes.
    entry: './assets/js/main.js',
    //Objet contenant le chemin de sortie, ainsi que le nom à donner au fichier
    output: {
        path: path.resolve(__dirname, 'public/assets/js'),
        filename: "bundle.js"
    },
}
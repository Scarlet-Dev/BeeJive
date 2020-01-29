//Used to create an array of prests that can be used when building the React app.
const presets =[
    ["@babel/preset-env",{ //
        debug: true,    //
        useBuiltIns: 'usage',
        corejs: 3,
    }]
];

//Additional plugins that are called during babel builds.
const plugins = [];

module.exports = { presets, plugins }
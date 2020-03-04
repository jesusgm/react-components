var path = require("path");

module.exports = {
    stories: ['../src/**/*.stories.[tj]s', '../src/**/*.story.jsx'],
    addons: [{
        name: '@storybook/addon-storysource',
        options: {
            rule: {
                // test: [/\.stories\.jsx?$/], This is default
                include: [path.resolve(__dirname, '../src')], // You can specify directories
            },
            loaderOptions: {
                prettierConfig: {
                    printWidth: 80,
                    singleQuote: false
                },
            },
        },
    }, ],
};
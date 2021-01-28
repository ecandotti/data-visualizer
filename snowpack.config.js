// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
// eslint-disable-next-line no-undef
module.exports = {
    mount: {
        public: '/',
        src: '/dist',
        node_modules: '/web_modules',
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        [
            '@snowpack/plugin-babel',
            {
                input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'], // (optional) specify files for Babel to transform
                transformOptions: {},
            },
        ],
    ],
    devOptions: {
        port: 3000,
    },
    routes: [
        {
            match: 'routes',
            src: '.*',
            dest: '/index.html',
        },
    ],
}


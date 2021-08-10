module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@gavel/core': './_GavelBaseCore/core',
                        '@gavel/page': './_GavelBaseCore/page',
                    },
                },
            ],
            ['react-native-reanimated/plugin'],
        ],
    };
};

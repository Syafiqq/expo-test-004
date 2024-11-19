module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@env': './src/core/env.js',
          },
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
        },
      ],
      ['@babel/plugin-transform-flow-strip-types'],
      ['@babel/plugin-proposal-decorators', {legacy: true}],
      ['@babel/plugin-transform-class-static-block'],
      ['@babel/plugin-transform-class-properties', {loose: true}],
      'react-native-reanimated/plugin',
    ],
  };
};

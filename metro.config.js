const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      // assetExts: assetExts.filter(ext => ext !== 'svg'),
      // sourceExts: ['jsx', 'js', 'json', 'ts', 'tsx', 'svg'],
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();

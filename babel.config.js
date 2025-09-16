module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: [
    //   // Replace the old reanimated plugin with the new worklets plugin
    //   'react-native-worklets/plugin'
    // ],
  };
};
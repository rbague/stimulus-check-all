module.exports = {
  exclude: /node_modules/,
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ],
  presets: [
    ['@babel/preset-env', { modules: false }]
  ]
};

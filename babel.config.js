module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],

      // for rendering jsx in test cases
      ['@babel/preset-react', {targets: {runtime: 'automatic'}}]
    ],
  };
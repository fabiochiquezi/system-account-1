module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@helpers': ['./src/helpers/*']
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts',
    '**/*.test.ts',
    '**/*.spec.js',
    '**/*.spec.js'
  ]
}

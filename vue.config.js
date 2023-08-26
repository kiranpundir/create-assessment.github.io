const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module: {
  rules: [
    // ... other rules
    {
      test: /\.less$/,
      use: [
        'vue-style-loader', // Only necessary for development
        'css-loader',
        'less-loader'
      ],
    },
  ]
}


module.exports = {
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': {page: '/'},
      '/posts/emberjs-with-xstate': {page: '/posts/[slug]', query: {slug: 'emberjs-with-xstate'}}
    }
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  }
}
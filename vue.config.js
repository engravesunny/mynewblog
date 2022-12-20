// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
        .loader('vue-loader')
        .end()
      .use('vue-markdown-loader')
        .loader('vue-markdown-loader/lib/markdown-compiler')
        .options({
          wrapper: 'article',
          wrapperName: '123',
          raw: true,
          preventExtract: true,
          use: [
            [require('markdown-it-container'), 'tip'],
            [require('markdown-it-container'), 'warning'],
            [require('markdown-it-container'), 'danger'],
            [require('markdown-it-container'), 'details'],
          ],
        })
        // .end()
  }
}

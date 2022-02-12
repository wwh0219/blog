module.exports={
  themeConfig:require('./config/themeConfig'),
  base:'/blog/',
  head: [['link', { rel: 'icon', href: '/images/icon.png' }]],
  plugins:[
    '@vuepress/plugin-search'
  ]
}
import { defineConfig } from "vitepress"
import type { DefaultTheme } from "vitepress"
import fxConfig from "@fuxishi/vitepress-theme/config"
import type { FxThemeCustomConfig } from "@fuxishi/vitepress-theme"

type ThemeConfig = DefaultTheme.Config & FxThemeCustomConfig

export default defineConfig<ThemeConfig>({
  extends: fxConfig,
  lang: "zh-CN",
  title: "乐上⬆️",
  description: "技术分享、Java、JavaScript、NodeJS、TypeScript、AI、Redis、Spring、ElasticSearch、nginx、Maven",
  themeConfig: {
    // 在这里添加你的导航、侧边栏等配置
    // nav: [{ text: "指南", link: "/guide/" }],
    nav: [
      { text: '首页', link: '/' },
      { text: '技术', link: '/common-links' }
    ],
    // sidebar: {
    //   "/guide/": [{ text: "介绍", link: "/guide/" }],
    // },

        // 侧边栏
    sidebar: [
      {
        text: '综合',
        items: [
          //{ text: 'Markdown Examples', link: '/markdown-examples' },
          //{ text: 'Runtime API Examples', link: '/api-examples' },
          { text: '常用软件下载链接🔗', link: '/common-links' },
          { text: 'SSR、CSR、SPA、SSG', link: '/SSR' },
          { text: '对 markdown 语言的浅显理解', link: '/markdown' },
          { text: 'nginx 配置', link: '/nginx-1.28.0.conf' },
        ]
      }
      , {
        text: 'Maven',
        items: [
          { text: 'Maven settings 配置', link: '/maven/maven-settings' },
          { text: 'Maven 3.9.15 settings 配置', link: '/maven/apache-maven-3.9.15-settings.xml' },
        ]
      }
      , {
        text: 'MySQL',
        items: [
          { text: 'MySQL-8.4.9-x64-LTS 配置', link: '/mysql/MySQL-8.4.9-x64-LTS-my-ini' },
          { text: 'MySQL 5.7.44 x64 配置', link: '/mysql/mysql-5.7.44-x64-my.ini' },
        ]
      }
      , {
        text: 'ElasticSearch',
        items: [
          { text: 'ElasticSearch-9.4.1 配置', link: '/elasticsearch/ElasticSearch-9.4.1-yml' },
          { text: 'ElasticSearch-2.4.6 配置', link: '/elasticsearch/elasticsearch-2.4.6.yml' },
        ]
      }
    ],

    // 搜索🔍
    search: {
      // 本地搜索🔍，是基于浏览器的搜索🔍。
      provider: 'local'
    }
  },
})
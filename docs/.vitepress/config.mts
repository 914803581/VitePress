import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // title: "Joyupx SSG Project",
  title: "乐上⬆️",
  // description: "This is my first Joyupx SSG project.",
  description: "技术分享、Java、JavaScript、NodeJS、TypeScript、AI、Redis、Spring、ElasticSearch、nginx、Maven",
  // base: '/VitePress/',
  base: '/',	// 虽然代码在 VitePress 仓库中，但是使用了域名，所以部署后就是根目录了。
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术', link: '/常用软件下载链接' }
    ],

    sidebar: [
      {
        text: 'MySQL',
        items: [
          //{ text: 'Markdown Examples', link: '/markdown-examples' },
          //{ text: 'Runtime API Examples', link: '/api-examples' },
          { text: '常用软件下载链接🔗', link: '/common-links' },
          { text: 'SSR、CSR、SPA、SSG', link: '/SSR' },
          { text: '对 markdown 语言的浅显理解', link: '/markdown' },
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

	/*
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
	*/
  }
})

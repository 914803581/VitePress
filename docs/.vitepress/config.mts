import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // title: "Joyupx SSG Project",
  title: "乐上好学",
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
        text: '标题',
        items: [
          //{ text: 'Markdown Examples', link: '/markdown-examples' },
          //{ text: 'Runtime API Examples', link: '/api-examples' },
          { text: '常用软件下载链接🔗', link: '/common-links' },
          { text: 'SSR、CSR、SPA、SSG', link: '/SSR' },
          { text: 'Maven settings 配置', link: '/maven-settings' },
          { text: 'Windows 11 环境中 MySQL-8.4.9-x64-LTS 配置文件', link: '/MySQL-8.4.9-x64-LTS-my-ini' },
          { text: 'Windows 11 环境中 ElasticSearch-9.4.1 配置文件', link: '/ElasticSearch-9.4.1-yml' },
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

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
      { text: '技术', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '标题',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '常用软件下载链接🔗', link: '/常用软件下载链接' },
          { text: 'SSR、CSR、SPA、SSG', link: '/SSR' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

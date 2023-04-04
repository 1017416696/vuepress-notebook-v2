import { defineUserConfig } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'


export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Penrose个人笔记',
    description: '记录自己在Obsidian中的笔记',
    head: [['link', { rel: 'icon', href: '/icon.svg' }]],
    host: '10.1.11.162',
    markdown: {
        lineNumbers: true
    },
    plugins: [
        googleAnalyticsPlugin({
            id: 'G-J7KE7WZYK7'
        }),
        nprogressPlugin(),
        docsearchPlugin({
            // 配置项
        }),
    ],
})

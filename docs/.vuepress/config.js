import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import {themeConfig} from "./config/index";

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Penrose个人笔记',
    description: '记录自己在Obsidian中的笔记',
    head: [
        ['link', { rel: 'icon', href: '/icon.svg' }]
    ],
    host: '10.1.11.162',
    markdown: {
        lineNumbers: true
    },
// 具体对 recoTheme 主题的配置在 ./config/index.js 文件中
    theme: recoTheme(themeConfig)
})

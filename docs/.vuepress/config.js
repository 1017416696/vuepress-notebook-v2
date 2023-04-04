import { defineUserConfig } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { recoTheme } from 'vuepress-theme-reco'
import {themeConfig} from "./config/index";

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Penrose个人笔记',
    description: '记录自己在Obsidian中的笔记',
    head: [
        ['link', { rel: 'icon', href: '/icon.svg' }],
    ],
    host: '10.1.11.162',
    markdown: {
        lineNumbers: true
    },
    plugins: [
        googleAnalyticsPlugin({
            id: 'G-J7KE7WZYK7'
        }),
        nprogressPlugin(),
//        docsearchPlugin({
//            algolia: {
//                appId: '38R2J3MTQC',
//                apiKey: '583d3caf699630b08a9bc2d12d599701',
//                indexName: '10.1.11.162:8080',
//                // inputSelector: '### REPLACE ME ####',
//                // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
//                // debug: false // Set debug to true if you want to inspect the dropdown
//            },
//        }),
    ],
    theme: recoTheme(themeConfig)
})

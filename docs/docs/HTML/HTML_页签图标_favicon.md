---
title: HTML_页签图标favicon
---
如果网页中没有设置 icon 图表，开发者工具右上角会有错误提示 

favicon.ico 名称和格式都不能改 

## 方法一 

如果使用 VSCode 打开网页，只需要在该网页所在文件夹下添加一个 favicon.ico 图片(不能放在深层文件夹中)，浏览器就会自动加载该页签图标 

[页签图标网站](https://favicon.io/)

## 方法二 

在 html 页面中引入页签图标

```
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```

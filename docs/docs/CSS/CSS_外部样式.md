---
title: CSS_外部样式
---
html 页面引入外部样式文件，实现样式和结构完全分离

如果网页中多个 html 页面使用同一个 css 文件，从第二个 html 页面开始直接从缓存中使用同一个 css 文件 

```html
<head>
	<link rel="stylesheet" href="style.css">
</head>
```

rel 表示 relation，关联 

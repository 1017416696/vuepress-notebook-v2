---
title: CSS_内部样式
---
内部样式就是写在 html 的内部 ，但此时页面和样式还没有完全分离

在css 中宽度和高度需要加上 px 单位，标签自身的属性不需要加 px

```html
<head>
	<style>  
    h1 {  
        color: red;  
        font-size: 40px;  
    }  
    img {
	    width:100px
    }
</style>
</head>
<body>
	<h1>你好</h1>
</body>
```


---
title: HTML_框架标签iframe
---
利用网页嵌入网页 

```
<iframe src="https://www.taobao.com" frameborder="0" width="1000"></iframe>
```

frameborder  属性值只有0 和 1，代表有和没有边框 

该标签主要用于网页嵌入式广告 

该标签可以嵌入浏览器能打开的所有文件 

该标签是行内元素 

 iframe 标签结合表单的 target 属性

```html
<form action="https://so.toutiao.com/search" target="container">  
  <input type="text" name="keyword" />  
  <input type="submit" value="搜索" />  
</form>  
<iframe  
    name="container"  
    frameborder="0"  
    width="1000"  
    height="1000"  
></iframe>
```




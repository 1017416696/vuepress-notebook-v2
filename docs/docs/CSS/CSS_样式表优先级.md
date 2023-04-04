---
title: CSS_样式表优先级
---
[[CSS_行内样式(内联样式)]] 优先级最高

[[CSS_内部样式]] 和 [[CSS_外部样式]] 的优先级是相同的，它俩遵循后来者居上原则 


```html
<!-- 此时以后写的样式为准 -->
<style>  
    h1 {  
        color: red;  
    }  
</style>  
<link rel="stylesheet" href="style.css">
```







---
title: CSS3_伪类选择器_目标伪类(了解）
---

```
<a href="#one">去看第一个</a>  
<a href="#two">去看第二个</a>  
  
<div id="one">第一个</div>  
<div id="two">第二个</div>
```

```css
/* 选中锚点指向的元素 */
div:target {  
    background-color: green;  
}
```

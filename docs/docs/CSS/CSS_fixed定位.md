---
title: CSS_fixed定位
---
`position: fixed;` 元素是相对于视口定位，即使滚动页面，元素也不动

用 `fixed` 定位的元素是在页面的最顶层，会压住下面的元素

top、right、bottom 和 left 属性用于定位此元素 

```
div.fixed {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 300px;
  border: 3px solid #73AD21;
}
```


![[Pasted image 20221223195449.png]]

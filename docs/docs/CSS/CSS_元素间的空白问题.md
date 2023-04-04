---
title: CSS_元素间的空白问题
---
元素间的空白问题主要是行内元素和行内块元素的空白问题 


```html
<div>
	<span>inner1</span>
	<span>inner2</span>
	<span>inner3</span>
</div>
```

如果 span 元素换行，就会有空白问题 

第一种解决方案是不换行，但是这种方式不太好 

第二种解决方案 

空格也属于文字，让父元素的字体大小为0，然后再单独设置该元素的字体大小即可解决

```css
div {
	font-size: 0;
}
span {
	font-size: 10px;
}
```

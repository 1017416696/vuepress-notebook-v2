---
title: CSS_定位的特殊应用
---
## 特殊应用一

父元素没有设置 width，由子元素撑开。子元素没有设置 width，但设置了 padding 和 border，此时子元素想占满整个父元素的 width 

```css
.outer {
	height: 400px;
	background-color: #888;
	position: relative;
}
.inner {
	background-color: orange;
	position: absolute;
	left: 0;
	right: 0;
}
```

如果子元素想完全撑满父容器，再添加 `top: 0; bottom: 0;`

## 特殊应用二 

父元素和子元素都是块级元素且都有宽高，让子元素水平垂直居中 

```css
.outer {
	width: 800px;
	height: 400px;
	background-color: #888;
	position: relative;
}
.inner {
	width: 400px;
	height: 100px;
	background-color: orange;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}
```

---
title: CSS3_多背景
---
设置多背景图的属性只能是 `background`，不能是 `background-image`

```css
div {
	width: 400px;
	height: 400px;
	border: 1px solid black;
	background: url('./bg-lt.png') no-repeat left top,
				url('./bg-rt.png') no-repeat right top,
			url('./bg-lb.png') no-repeat left bottom,
			url('./bg-rb.png') no-repeat right bottom;
}
```


![[Pasted image 20230402215451.png|300]]

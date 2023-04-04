---
title: CSS3_盒子属性box-shadow盒子阴影
---


```css
/* 水平位置 垂直位置 */
box-shadow: 10px 10px;

/* 水平位置 垂直位置 阴影的颜色 */
box-shadow: 10px 10px blue;

/* 水平位置 垂直位置 模糊程度 */
box-shadow: 10px 10px 20px;

/* 水平位置 垂直位置 模糊程度 阴影的颜色 (用的多)*/
box-shadow: 10px 10px 20px blue;
d
/* 水平位置 垂直位置 模糊程度 外延值 阴影颜色 */
box-shadow: 10px 10px 20px 10px blue;

/* 水平位置 垂直位置 模糊程度 外延值 阴影颜色 内阴影 */
box-shadow: 10px 10px 10px 10px blue inset;
```

阴影的使用场景是鼠标滑过盒子时，出现阴影效果 

```css
.box {
	position: relative;
	left: 0;
	top: 0;
	transition: 0.4s linear all;
}
.box:hover {
	box-shadow: 0px 0px 20px black;
	top: -1px;
	left: 0;
}
```

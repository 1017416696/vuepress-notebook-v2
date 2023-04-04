---
title: CSS3_盒子属性box-sizing
---
该属性决定如何计算盒子的大小 

```css
/* content-box is the default value */
box-sizing: border-box/content-box;
```


```css
/* 此时设置的 width 和 height 是内容区的宽高 */
width: 200px; 
height: 100px;
```


```css
/* 此时设置的 width 和 height 是盒子的最终宽高，包括 padding 和 border */
.box {
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 1px solid black;
  margin: 20px;
}
```

该属性也叫怪异盒模型 

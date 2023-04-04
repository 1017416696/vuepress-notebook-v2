---
title: CSS3_背景属性background-size背景大小
---

```css
width: 400px;
height: 400px;
background-size: 400px 400px;

background-size: 100% 100%;

background-size: contain;

background-size: cover;(效果相对比较好)

/* 默认值 */
background-size: auto;
```


`contain` 将背景按原比例完整呈现出来，还会伴随背景重复

```
.box {
	background-image: url('./1.png');
	background-size: contain;
}
```

![[Pasted image 20230402214114.png|300]]

`cover` 将背景按原比例完整呈现出来，但可能不会显示全部的内容。当将图片等比例缩放到和容器的长度和宽度相同时就停止 

![[Pasted image 20230402214405.png|300]]

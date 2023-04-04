---
title: CSS3_背景属性background-clip背景修剪
---

```css
background-clip: content-box/padding-box/border-box(默认值);
```

`background-origin：padding-box;` 表示背景图和背景颜色超过 padding 区域就会被裁减掉

`background-clip` 一个特殊的值 `text`，背景图片只会在透明文字的区域填充

```css
.box {
	font-size: 50px;
	font-weight: bold;
	color: transparent;
	background-img: url('./1.png');
	-webkit-background-clip: text;
}
```

![[Pasted image 20230402213233.png]]

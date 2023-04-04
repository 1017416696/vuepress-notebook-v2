---
title: CSS_行内块的幽灵空白问题
---
![[Pasted image 20230329222345.png|300]]

如果图片所在的父元素中没有设置 height，则就会出现上图中的问题 

红框中的空白就称为幽灵空白 

这个空白可以参照字母 x 的位置对齐的，也就是基线对齐 

下面是第一种解决方法(推荐)

```css
img {
	/* 三种方式都可以解决幽灵空白问题，但会让对应的文字位置有所改变 */

	/* 文字靠上 */
	vertival-align: top;
	/* 文字靠中 */
	vertival-align: middle;
	/* 文字靠下 */
	vertival-align: bottom;
}
```

[[CSS_文本属性_vertical-align]] 

---

第二种方法(有局限性)

如果只有图片，没有文字 ，可以将图片设置为 块级元素 

```css
img {
	display: block;
}
```

第三种方法

归根结底还是文字出现的问题，那就还将父元素的字体大小改为0 

```css
div {
	font-size: 0;
}
```

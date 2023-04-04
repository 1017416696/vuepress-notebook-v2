---
title: CSS_盒子外边距_margin
---
## 写法 

```
margin: 上下 左右;
margin: 上 左右 下;
margin: 上 右 下 左;
```

## 注意事项 

子元素只能在父元素的 content 区域 

子元素的 margin 是参照父元素的 content 区域算的 

![[Pasted image 20230329172427.png]]


![[Pasted image 20230329172410.png|300]]

---

上 margin 和左 margin 都会影响自身的位置 

下 margin 和 右 margin 会影响兄弟元素的位置 ，自身位置不变化

---

设置 [[HTML_块级元素和行内元素|行内元素]]  的左右 margin是有效果的，但是设置上下的 margin  就没有效果 

`<span></span>`

---

对于 [[HTML_块级元素和行内元素|块级元素]] ，设置左右的 margin 值为 auto，就可以让其居中，但必须有宽度才有效果 

```css
width: 300px;
margin: 100px auto;
```

如果只设置左边的 margin 为 auto，则它就会离左边能有多远就有多远

---

margin 的值可以为负值 

## margin 塌陷问题 

父元素的==第一个==子元素的 上margin 会作用在父元素上，父元素的==最后一个==子元素的下margin 会作用在父元素上 

```html
<div class="parent">
		<div class="inner1">
			inner1
		</div>
		<div class="inner2">
			inner2
		</div>
</div>
```

```css
.parent {
	width: 400px;
}
.inner1 {
	width: 100px;
	height: 100px;
	/* 这段代码不起作用，因为会作用到父元素上 */
	margin-top: 50px;
}
.inner2 {
	width: 100px;
	height: 100px;
	/* 这段代码不起作用，因为会作用到父元素上 */
	margin-bottom: 50px;
}
```


解决方案 

1. 为父元素设置不为0的 padding 

2. 为父元素设置宽度不为0 的 border 

3. 为父元素设置 css 样式 `overflow:hidden;` (推荐)

`overflow` 属性表示溢出之后的显示模式 

塌陷问题是一个历史遗留问题，之前认为将第一个元素的 margin-top 直接交给父元素比较好，将最后一个元素的 margin-bottom 直接交给父元素也比较好

## margin 合并问题 

该问题只存在于兄弟元素之间的上下 marign 

```html
<div class="parent">
		<div class="inner1">
			inner1
		</div>
		<div class="inner2">
			inner2
		</div>
</div>
```

```css
.parent {
	width: 400px;
}
.inner1 {
	width: 100px;
	height: 100px;
	margin-bottom: 50px;
}
.inner2 {
	width: 100px;
	height: 100px;
	margin-top: 50px;
}
```

即使给 inner1 添加了 下外边距，给 inner2 添加了上外边距，inner1 和 inner2 之间的间距仍为50px 

这个问题不需要解决，自己规避一下就可以了 


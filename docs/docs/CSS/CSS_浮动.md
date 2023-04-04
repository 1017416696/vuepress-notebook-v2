---
date created: '2023-03-30 21:02'
title: CSS_浮动
---

浮动设计的初衷是为了让文字环绕图片显示

![[Pasted image 20230330185341.png|300]]

```css
float: left/right;
```

## 元素浮动后的特点

所有的盒子都没有长度和宽度

![[Pasted image 20230330185732.png|400]]

让盒子2浮动后的效果

![[Pasted image 20230330185808.png|400]]

盒子3中的文字自动躲开盒子2的背景 (因为浮动设置的最初效果就是实现文字环绕)

元素浮动后，脱离文档流，但不能超出父容器的宽度

元素浮动后，元素的宽和高都是被内容撑开的(宽度和高度尽可能窄)，即使是块级元素也是这样 。但如果为该元素设置了宽高，浮动后宽高不发生变化

元素浮动后，可以和其他元素共用一行

浮动后的元素没有 [[CSS_盒子外边距_margin]] 塌陷和合并问题，四个方向的 margin 和 padding 都可以起作用

浮动后的元素布局方式不能当作文字一样处理 ，但浮动后的元素没有行内块问题(盒子二和盒子三都浮动的情况下)

![[Pasted image 20230330191153.png|400]]

## 浮动后的影响

子元素都浮动了，父元素的高度就会塌陷

浮动元素后的兄弟元素，会占据浮动元素之前的位置，就会在浮动元素的背后(下面)，对前面的兄弟元素没有影响

## 解决浮动产生的影响

第一种解决方案是直接给父元素设置高度

第二种解决方案是让父元素也浮动

第三种解决方案是给父元素 `overflow: hidden;`

但前三种方案都不能解决浮动元素后的兄弟元素受到的影响问题

第四种解决方案为受影响的兄弟元素消除前面所有左浮动和右浮动的元素产生的影响  `clear: both;`，但前提是这个元素不是浮动的且不能是行内元素

第五种解决方案是在最后补一个没宽没高的容器，让其解决浮动问题，为其加上 `clear: both;`

```css
.box1,.box2,.box3 {
	floa: left;
}
.mofa {
	clear: both;
}
```

```html
<div class="outer">
	<div class="box box1">1</div>
	<div class="box box2">2</div>
	<div class="box box3">3</div>
	<div class="mofa"></div>
</div>
```

第六种解决方案是利用 [[CSS_CSS3_伪元素选择器]]

```html
<div class="outer">
	<div class="box box1">1</div>
	<div class="box box2">2</div>
	<div class="box box3">3</div>
</div>
```

```css
.box1,.box2,.box3 {
	floa: left;
}
.outer::after {
	content: '';
	display: block;
	clear: both;
}
```

但如果在最后又添加一个子元素，没有为其设置浮动，此时就解决不了这个问题了

---

布局的重要原则：子元素要么都浮动，要么都不浮动

## 浮动布局练习

当元素需要左浮动或者有浮动或者需要借助伪元素选择器添加内容时，直接为元素添加上对应的类即可，不用在选中元素再加样式

```css
* {
	 margin: 0;
	 padding: 0;
}
.leftfix {
	float: left;
}
.rightfix {
	float: right;
}
.clearfix::after {
	content: '';
	display: block;
	clear: both;
}
```

```html
<div class="header clearfix">  
  <div class="logo leftfix">logo</div>  
  <div class="banner1 leftfix">banner1</div>  
  <div class="banner2 leftfix">banner2</div>  
</div>
```

---

![[Pasted image 20230330204539.png]]

直接给 banner 添加左右边框即可

---

![[Pasted image 20230330205012.png|400]]

栏目一二整个宽度为370，还包括边框，所以它们的 width 为 368px，height 为 198px

---

![[Pasted image 20230330210213.png]]

每一个元素都是块元素，让 header 中的元素全部浮动，让 left 和 right 容器都浮动，就可以实现当前的布局 


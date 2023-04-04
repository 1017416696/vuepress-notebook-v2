---
title: CSS_布局小技巧
---
## 布局一 

让块级元素在块级元素中水平垂直居中 

让单行文字在块级元素中水平垂直居中显示 

![[Pasted image 20230329212751.png|300]]


```html
<div class="parent">  
  <div class="inner1">inner1</div>  
</div>
```

```css
.parent {  
  width: 400px;  
  height: 400px;  
  background-color: gray;  
  overflow: hidden;  
}  
.inner1 {  
  width: 200px;  
  height: 100px;  
  background-color: orange;  
  margin: 0 auto;  
  margin-top: 150px;
  line-height: 100px;  
  text-align: center;  
}
```

橙色盒子垂直居中公式= (父元素height -当前元素height) / 2

方案二 [[CSS_定位的特殊应用]]

## 布局二 

让行内元素在块级元素中水平垂直居中

![[Pasted image 20230329214534.png|300]]

>调整行内元素和行内块元素的位置，可以当作调整文本的位置一样 

```html
<div class="parent">  
  <span class="inner1">inner1</span>  
</div>
```

```css
.parent {  
  width: 400px;  
  height: 400px;  
  background-color: gray;  
  text-align: center;  
  line-height: 400px;  
}  
.inner1 {  
  background-color: orange;  
}
```

## 布局三 (重难点)

![[Pasted image 20230329214749.png|300]]

让块级元素中的文字和图片水平垂直居中 

```html
<div class="parent">  
  <span>出来玩啊</span>  
  <img src="./test.jpg" >
</div>
```

```css
.outer {
  width: 400px;  
  height: 400px;  
  background-color: gray;  
  /* 控制子元素的水平对齐 */
  text-align: center;  
  line-height: 400px;  
  
  /* 防止行内子元素或者行内块子元素受父元素中文字的影响 */
  font-size: 0px;
}
span {
	font-size: 40px;
	vertical-align: middle;
}
img {
	vertical-align: middle;
}
```

## 总结 

如何让子元素在父元素中水平居中？

如果子元素为块元素，则给自身加上 `margin: 0 auto;`

如果子元素为行内或者行内块元素，给父元素加上 `text-align: center;`

如何让子元素在父元素中垂直居中？

如果子元素为块元素，则给自身加上 `margin-top: (父元素content - 子元素盒子总高) / 2`

如果子元素为行内或者行内块元素，给父元素加上 `height: line-height;` ，给每个子元素都加上 `vertical-align: middle;`。如果想绝对垂直居中，还需要将父元素中的 font-size 的值设为0 

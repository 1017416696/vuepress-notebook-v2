---
title: CSS_伪类选择器概念
---
为元素进行分类，但是没有为其添加 class 属性，这就叫伪类

伪类选择器会根据元素的==状态==或者==位置==选择元素 

鼠标悬停状态 、选中状态、访问链接状态 

用 `:` 表示伪类选择器 

---
鼠标悬停在元素上时的状态

```css
a:hover {
  color: red;
}
```

---

选中激活状态的 a 元素(被鼠标点击就是被激活类)

```css
a:active {
  color: red;
}
```

---

选中没有被访问过的链接

```css
a:link {
  color: red;
}
```

---

选中被访问过的链接

```css
a:visited {
  color: red;
}
```

a 标签中状态的顺序不能乱写，不然某些效果会出不来 

link visited hover active 这是书写的顺序 (lvha)

hover 和 active 是所有元素都有的状态 

---

只选择被选中的复选框 

```css
input:checked{
	width:20px;
	height:20px
}
```

>注：
>:checked 伪类选择器只能用于表单元素，并且不适用于所有浏览器

实例 [[JavaScript_实现全选框#伪类选择器实现]] ，在直接操作 DOM 元素时很好用 

---

获取输入框焦点的元素 

```css
input:focus {
	color: orange;
}
```



---
title: CSS3_伪元素选择器
---
很像元素，但不是元素，是元素中一些特殊的位置 

选中div 中的第一个字母 

```html
<div>Lorem ipsum dolor sit amet.</div>
```

```css
div::first-letter {  
    color: red;  
}
```

![[Pasted image 20230326221040.png]]

选中 div 中第一行的文字 

```css
div::first-line {  
    color: red;  
}
```

---

选中 div 中被鼠标选中的文字 

```css
div::selection {  
	background-color: green;
    color: red;  
}
```

---

修改输入框占位符的文字颜色

```css
input::placehoder {  
    color: skyblue;  
}
```

---

在 p 元素的内容之前加上 `¥`，在页面中选不中  `¥` 该字符 (加上的内容为行内元素)

```
<p>199</p>  
<p>299</p>  
<p>399</p>
```

```css
p::before {  
    content: "¥";  
}
```

---

在 p 元素的内容后加上内容 (加上的内容为行内元素)

```
p::after {  
    content: ".00";  
}
```

---

selection 和 placehoder 是 CSS3提出的，其他的都是 CSS2提出的

之前 CSS 2对伪元素选择器没要求，也可以只写一个 :，到了 CSS3 要求就比较严格 


---
title: CSS_文本属性vertical-align
---
控制元素在其所在那一行的垂直方向上的对齐方式

![[Pasted image 20230327214825.png]]


```css
/* 基线对齐，默认值 */
vertical-align: baseline;
```

---

![[Pasted image 20230327214703.png]]

```css
/* 一行的顶部对齐 */
vertical-align: top;
```

---

![[Pasted image 20230327214746.png]]

```
/* 一行的底部对齐 */
vertical-align: bottom;
```

---

![[Pasted image 20230327214356.png]]

```css
/* 元素的高度的一半与父元素的基线加上父元素 x-height 的一半对齐  */
vertical-align: middle;
```

---

```html
<div>Lorem ipsum <img src="./text.png" /> sit amet.</div>
```

```css
div {  
  font-size: 100px;  
}  
img {  
  height: 150px;  
  vertical-align: top;
}
```

此时文字和图片在一行，则按照高度最高的为行高，即 150px ，当为图片设置了 vertival-align，则该行的文字会根据图片进行调整

## 注意事项 

vertical-align 不能直接控制文字的垂直样式 

vertical-align 不能控制块级元素 ，只能操作行内元素 

vertical-align 可以用在单元格中，可以控制文字在单元格的垂直位置，和 [[HTML_表格_table#表头属性]] 中的 `valign` 属性实现的效果相同 


```html
<td class="test">xxx</td>
```

```css
.test {
	vertical-align: top;
}
```

---

![[Pasted image 20230401100922.png]]

如果输入框和包含文字的按钮没有全部对齐，多半是基线对齐的问题，解决方法就是该按钮设置 `vertical-align: center;`

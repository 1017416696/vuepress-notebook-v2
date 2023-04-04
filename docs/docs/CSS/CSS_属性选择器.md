---
title: CSS_属性选择器
---
选中具有 title 属性的元素 

```css
[title] {
	color: red;
}
```

```
<div title="hello1">你好</div>

<div title="hello2">你好</div>
```

![[Pasted image 20230326170652.png]]

---

选中 title 属性值为 hello1 的元素 

```css
[title='hello1'] {
	color: red;
}
```

---
选中 title 属性值为 h 开头 的元素 

```css
[title^='h'] {
	color: red;
}
```

[[Java_正则表达式]]

---
选中 title 属性值为 h 结尾的元素 

```css
[title$='h'] {
	color: red;
}
```

[[Java_正则表达式]]

---
选中 title 属性值为包含 h 字符的元素 

```css
[title*='h'] {
	color: red;
}
```

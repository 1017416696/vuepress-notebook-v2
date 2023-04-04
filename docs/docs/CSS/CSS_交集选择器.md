---
title: CSS_交集选择器
---
交集选择器就是 且

交集选择器中，标签名必须在开头

```html
<h1 class="say">你好</h1>
```

```css
/* 这种交集选择器比较常用 */
h1.say {
	color: red;
}
```

交集选择器中不会出现两个元素选择器 

交集选择器中可以出现两个类名，但不常用 

```html
<h1 class="rich beauty">你好</h1>
```

```css
.rich.say {
	color: red;
}
```


交集选择器中一般不使用 id，因为 id 的值本来就是唯一的




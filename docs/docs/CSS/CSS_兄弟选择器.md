---
title: CSS_兄弟选择器
---
## 相邻兄弟选择器

相邻兄弟选择器用 `+` 表示 

`+` 表示紧紧相邻的，并且是下面紧紧相邻的

```css
/* 选中 div 后紧紧相邻的兄弟p元素 */
div + p {
	color: red;
}
```

```html
<div>你好</div>
<p>前端</p>
<p>后端</p>
```

## 通用兄弟选择器 



```css
/* 选中 div 后所有的兄弟p元素 */
div ~ p {
	color: red;
}
```

---

## 使用场景 

```html
<ul>  
    <li>主页</li>  
    <li>秒杀</li>  
    <li>订单</li>  
</ul>
```


```css
li + li {
	color: red;
}
```

这样的使用方法就是排除第一个 li ，选中其他的 li

![[Pasted image 20230326170106.png]]

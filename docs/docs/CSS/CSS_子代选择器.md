---
title: CSS_子代选择器
---
子代就是儿子元素 

子代选择器用 `>` 表示 

```html
<div>  
    <a href="#">张三</a>  
    <p>  
        <a href="#">王五</a>  
    </p>  
</div>
```

```css
div > a {  
	color: red;  
}  
div > p > a {  
	color: skyblue;  
}  
```

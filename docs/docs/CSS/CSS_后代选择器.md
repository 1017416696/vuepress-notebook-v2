---
title: CSS_后代选择器
---
后代就是儿子的儿子···，子元素也是后代 

后代选择器之间用空格隔开 

```html
<ul>  
    <li>抽烟</li>  
    <li>喝酒</li>  
    <li>  
        <a href="#">烫头</a>  
    </li>  
</ul>  
<ol>  
    <li>张三</li>  
    <li>李四</li>  
</ol>  
  
<ol class="subject">  
    <li>前端</li>  
</ol>
```

```css
ul li {  
	color: red;  
}  
ul li a {  
	color: orange;  
}  
ol li {  
	color: green;  
}  
.subject li {  
	color: blue;  
}  
```

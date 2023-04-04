---
title: CSS_精灵图
---
将同一区域的多个小图标整合成一张图片 

![[Pasted image 20230401110659.png]]

精灵图一般作为背景使用 

先写一个空的 div，没有颜色和背景，然后让背景图动

分三行使用，每一行就是一个 ul，ul 中包含四个 li 

![[Pasted image 20230401110858.png|300]]


```html
<ul class="nav-list">  
  <li>  
    <div class="picture"></div>  
    <span>话费</span>  
  </li>  
</ul>
<ul class="nav-list">
  <li>  
    <div class="picture"></div>  
    <span>话费</span>  
  </li>  
</ul>
<ul class="nav-list">
  <li>  
    <div class="picture"></div>  
    <span>话费</span>  
  </li>  
</ul>
```

```css
.nav-list picture {  
  background-image: url("./sprite.png");  
}  
/*找到第一行的 ul，找到该 ul 中的第一个 li 找到li 中的 picture*/.nav-list:nth-child(1) li:nth-child(1) .picture {  
  background-position: 0 0 ;  
}  
.nav-list:nth-child(1) li:nth-child(2) .picture {  
  background-position: -48px 0 ;  
}  
.nav-list:nth-child(1) li:nth-child(3) .picture {  
  background-position: -96px 0 ;  
}  
.nav-list:nth-child(1) li:nth-child(4) .picture {  
  background-position: -144px 0 ;  
}
```


[[CSS_CSS3_伪类选择器_结构伪类]]

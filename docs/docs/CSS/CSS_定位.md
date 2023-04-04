---
title: CSS_定位
---
无论什么定位，都需要设置定位的坐标 left right top bottom

## 相对定位 

相对定位是相对自己原来的位置 

相对定位不仅需要设置为相对定位，而且还需要设置具体的坐标 

开启相对定位没有脱离文档流 ，可以超出父元素的宽度 

left 和 right 不能同时用，如果同时用，只有 left 会生效

开启相对定位的元素，其所在的图层比普通元素要高，但并不是浮动

如果元素都开启了相对定位，则后写的元素会比先写的元素图层层级要高 

```css
position: relative;
left: 240px;
```

> left 和 margin-left 一般不同时使用 
> 相对定位和浮动一般也不同时使用 

## 绝对定位 

![[Pasted image 20230331091203.png|300]]

开启绝对定位后，该元素就会脱离文档流，并且原地起飞 

如果自己的父亲没有设置相对定位，则它会一直向上找。如果都没有开启，则以 html 元素作为参考，即浏览器的视口作为参考 。为了方便管理子元素，父亲最好都开启相对定位

子绝父相：子元素开启绝对定位，父元素开启相对定位，但不给父元素坐标

开启绝对定位可以超出父元素的宽度

尽量不要给开启绝对定位的元素使用 margin ，如果设置了 left ，margin-left 才会有效果，但不推荐这样使用 

绝对定位的元素不能设置浮动 

设置了绝对定位的元素就变成了定位元素，定位元素的默认宽高是被内容撑开的，但也可以自己设置宽高 。但相对定位的元素没有此特点 

绝对定位的应用场景一般都是压在某个元素的身上 

鼠标进入 outer ，就让盒子2向右移

```html
<div class="outer">  
  <div class="box box1">1</div>  
  <div class="box box2">2</div>  
</div>
```

```css
.outer {  
  width: 400px;  
  background-color: gray;  
  position: relative;  
}  
.box {  
  width: 100px;  
  height: 100px;  
}  
.box1 {  
  background-color: orange;  
}  
.box2 {  
  background-color: antiquewhite;  
  position: absolute;  
  left: 0;  
  top: 0;  
  transition: 1s all linear;
}  
/* 包含动态伪类和后代选择器 */
.outer:hover .box2 {  
  left: 100px;  
}
```

![[Pasted image 20230331094638.png]]

鼠标移入 outer，box2 就会向右移100px

---

![[Pasted image 20230401103751.png]]

这种布局，二级菜单(天蓝色区域)是相对于 ul 定位的，不是相对于 li，并且二级菜单应该写在 li 标签内 

```html
<ul>  
  <li>  
    <a href="#">手机</a>  
    <div class="second-menu"></div>  
  </li>  
</ul>
```


## 固定定位 

设置固定定位的元素直接相对于 html 视口进行调整 

```css
position: fixed;
left: 10px;
```


给固定定位的元素开启浮动是没有效果的

设置了固定定位的元素就变成了定位元素，定位元素的默认宽高是被内容撑开的，但也可以自己设置宽高 

## 粘性定位 

粘性定位就是当元素到达某个位置时将其黏住

```
position: sticky;
top: 0;
```

粘性定位的参考点是离它最近的一个拥有滚动行为的祖先元素，大多数情况下如果 body 的高度足够高，则参考点为 body 

当该元素的父容器超出该元素所在的范围后，粘性就失效了

粘性定位不脱离文档流 


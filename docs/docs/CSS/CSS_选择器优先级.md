---
title: CSS_选择器优先级
---
## 简单选择器计算

!important > 行内样式 > ID 选择器 > 类选择器 > 元素选择器 > 通配选择器 

## 复杂选择器计算

权重计算规则(a,b,c)

a：ID 选择器的个数 

b：类、伪类、属性 选择器的个数 

c：元素、伪元素 选择器的个数 


```css
/* 权重(0,2,1) */
.container span.slogan {
	color: red;
}

/* 权重(0,1,3) */
div>p>span:nth-child(1) {
	color: green;
}
```

如果权重相同，则后来者居上 

>并集选择器的每一个部分都是分开计算的 
>div,p,span {xxx}，三个选择器会分开计算 

---

```
.slogan {  
    color: purple !important;  
}
```

如果为某一个属性加上 `!important`，则它就是最厉害的选择器 


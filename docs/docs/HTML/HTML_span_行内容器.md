---
title: HTML_span_行内容器
---
`<span>` 标签的 `title`  属性：鼠标悬停后会显示出来

```html
<span title="我是title">  
        xxx  
</span> 
```

`a` 标签也有 `title`  属性 

## 让 span 标签文字居中显示 

```html
<div class="charts">  
  <span>周同比 56.67%</span>
</div>
```



```css
.charts{  
  text-align: center;  
  line-height: 60px  /* equal to container height */;
}  
.charts span{  
  display: inline-block;  
}
```

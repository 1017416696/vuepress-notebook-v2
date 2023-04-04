---
title: CSS3_伪类选择器_否定伪类
---
排除类名为 fail 的元素 

```css
div>p:not(.fail) {  
    color: red;  
}
```

```html
<div>  
    <p>1</p>  
    <p>2</p>  
    <p class="fail">3</p>  
    <p>4</p>  
</div>
```

![[Pasted image 20230326214615.png]]
